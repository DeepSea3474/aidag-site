import { Adapter } from "./adapter.js";
import { getCookie } from "hono/cookie";
import { MissingParameterError, UnknownStateError } from "../error.js";

interface AdapterState {
  claims: Record<string, string>;
  code: string;
}

export function CodeAdapter<
  Claims extends Record<string, string> = Record<string, string>,
>(config: {
  length?: number;
  start: (req: Request) => Promise<Response>;
  send: (code: string, claims: Claims, req: Request) => Promise<Response>;
  invalid: (code: string, claims: Claims, req: Request) => Promise<Response>;
}) {
  const length = config.length || 6;
  function generate() {
    const buffer = crypto.getRandomValues(new Uint8Array(length));
    const otp = Array.from(buffer)
      .map((byte) => byte % 10)
      .join("");
    return otp;
  }

  return function (routes, ctx) {
    routes.get("/authorize", async (c) =>
      ctx.forward(c, await config.start(c.req.raw)),
    );

    routes.post("/submit", async (c) => {
      const code = generate();
      const claims = (await c.req
        .formData()
        .then((claims) => Object.fromEntries(claims))) as Claims;
      console.log("claims", claims);
      await ctx.set(c, "adapter", 60 * 10, {
        claims,
        code,
      });
      return ctx.forward(c, await config.send(code, claims, c.req.raw));
    });

    routes.post("/verify", async (c) => {
      const authorization = getCookie(c, "authorization");
      if (!authorization) throw new UnknownStateError();
      const state = await ctx.get(c, "adapter");
      if (!state) throw new UnknownStateError();
      if (!state.code || !state.claims) {
        return ctx.forward(
          c,
          await config.invalid(state.code, state.claims, c.req.raw),
        );
      }
      const form = await c.req.formData();
      const compare = form.get("code")?.toString();
      if (!compare) throw new MissingParameterError("code");
      if (state.code !== compare) {
        return ctx.forward(
          c,
          await config.invalid(compare, state.claims, c.req.raw),
        );
      }
      await ctx.unset(c, "adapter");
      return ctx.forward(c, await ctx.success(c, { claims: state.claims }));
    });
  } satisfies Adapter<{ claims: Claims }>;
}

export type CodeAdapterOptions = Parameters<typeof CodeAdapter>[0];
