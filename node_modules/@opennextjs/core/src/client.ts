import { createLocalJWKSet, errors, JSONWebKeySet, jwtVerify } from "jose";
import { SubjectSchema } from "./session.js";
import { v1 } from "@standard-schema/spec";
import {
  InvalidAuthorizationCodeError,
  InvalidRefreshTokenError,
  InvalidSessionError,
} from "./error.js";

interface WellKnown {
  jwks_uri: string;
  token_endpoint: string;
}

const jwksCache = new Map<string, ReturnType<typeof createLocalJWKSet>>();
const issuerCache = new Map<string, WellKnown>();

interface ResponseLike {
  json(): Promise<unknown>;
  ok: Response["ok"];
}
type FetchLike = (...args: any[]) => Promise<ResponseLike>;

export function createClient(input: {
  clientID: string;
  issuer?: string;
  fetch?: FetchLike;
}) {
  const issuer = input.issuer || process.env.OPENAUTH_ISSUER;
  if (!issuer) throw new Error("No issuer");
  const f = input.fetch ?? fetch;

  async function getIssuer() {
    const cached = issuerCache.get(issuer!);
    if (cached) return cached;
    const wellKnown = (await (f || fetch)(
      `${issuer}/.well-known/oauth-authorization-server`,
    ).then((r) => r.json())) as WellKnown;
    issuerCache.set(issuer!, wellKnown);
    return wellKnown;
  }

  async function getJWKS() {
    const wk = await getIssuer();
    const cached = jwksCache.get(issuer!);
    if (cached) return cached;
    const keyset = (await (f || fetch)(wk.jwks_uri).then((r) =>
      r.json(),
    )) as JSONWebKeySet;
    const result = createLocalJWKSet(keyset);
    jwksCache.set(issuer!, result);
    return result;
  }

  const result = {
    authorize(
      provider: string,
      redirectURI: string,
      response: "code" | "token",
    ) {
      const result = new URL(issuer + "/authorize");
      result.searchParams.set("provider", provider);
      result.searchParams.set("client_id", input.clientID);
      result.searchParams.set("redirect_uri", redirectURI);
      result.searchParams.set("response_type", response);
      return result.toString();
    },
    async exchange(code: string, redirectURI: string) {
      const tokens = await f(issuer + "/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          code,
          redirect_uri: redirectURI,
          grant_type: "authorization_code",
          client_id: input.clientID,
        }).toString(),
      });
      const json = (await tokens.json()) as any;
      if (!tokens.ok) {
        console.error(json);
        throw new InvalidAuthorizationCodeError();
      }
      return {
        access: json.access_token as string,
        refresh: json.refresh_token as string,
      };
    },
    async verify<T extends SubjectSchema>(
      subjects: T,
      token: string,
      options?: {
        refresh?: string;
        issuer?: string;
        audience?: string;
        fetch?: typeof fetch;
      },
    ): Promise<{
      access?: string;
      refresh?: string;
      subject: {
        [type in keyof T]: {
          type: type;
          properties: v1.InferOutput<T[type]>;
        };
      }[keyof T];
    }> {
      const jwks = await getJWKS();
      try {
        const result = await jwtVerify<{
          mode: "access";
          type: keyof T;
          properties: v1.InferInput<T[keyof T]>;
        }>(token, jwks, {
          issuer,
        });
        const validated = await subjects[result.payload.type][
          "~standard"
        ].validate(result.payload.properties);
        if (!validated.issues && result.payload.mode === "access")
          return {
            subject: {
              type: result.payload.type,
              properties: validated.value,
            } as any,
          };
      } catch (e) {
        if (e instanceof errors.JWTExpired && options?.refresh) {
          const wk = await getIssuer();
          const tokens = await f(wk.token_endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "refresh_token",
              refresh_token: options.refresh,
            }).toString(),
          });
          const json = (await tokens.json()) as any;
          if (!tokens.ok) {
            console.error(json);
            throw new InvalidRefreshTokenError();
          }
          const verified = await result.verify(subjects, json.access_token, {
            refresh: json.refresh_token,
            issuer,
            fetch: options?.fetch,
          });
          verified.access = json.access_token;
          verified.refresh = json.refresh_token;
          return verified;
        }
        throw e;
      }
      throw new InvalidSessionError();
    },
  };
  return result;
}
