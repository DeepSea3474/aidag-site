import { expect, test } from "bun:test";
import { authorizer } from "../src/authorizer.js";
import { MemoryStorage } from "../src/storage/memory.js";
import { createClient, createSubjects } from "../src/index.js";
import { object, string } from "valibot";
import { CodeAdapter } from "../src/adapter/code.js";

const subjects = createSubjects({
  user: object({
    userID: string(),
  }),
});
const auth = authorizer({
  storage: MemoryStorage(),
  subjects,
  callbacks: {
    auth: {
      allowClient: async () => true,
      success: async (ctx, value) => {
        return ctx.session("user", {
          userID: "123",
        });
      },
    },
  },
  ttl: {
    access: 1,
  },
  providers: {
    dummy: (routes, ctx) => {
      routes.get("/authorize", async (c) => {
        return ctx.forward(c, await ctx.success(c, {}));
      });
    },
  },
});

test("code flow", async () => {
  const client = createClient({
    issuer: "https://auth.example.com",
    clientID: "123",
    fetch: (a, b) => Promise.resolve(auth.request(a, b)),
  });
  const authorization = client.authorize(
    "dummy",
    "https://client.example.com/callback",
    "code",
  );
  let response = await auth.request(authorization);
  expect(response.status).toBe(302);
  response = await auth.request(response.headers.get("location")!, {
    headers: {
      cookie: response.headers.get("set-cookie")!,
    },
  });
  expect(response.status).toBe(302);
  const location = new URL(response.headers.get("location")!);
  const code = location.searchParams.get("code");
  expect(code).not.toBeNull();
  const tokens = await client.exchange(
    code!,
    "https://client.example.com/callback",
  );
  expect(tokens.access).toBeTruthy();
  expect(tokens.refresh).toBeTruthy();
  const verified = await client.verify(subjects, tokens.access);
  expect(verified.subject.type).toBe("user");
  if (verified.subject.type !== "user") throw new Error("Invalid subject");
  expect(verified.subject.properties.userID).toBe("123");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  expect(client.verify(subjects, tokens.access)).rejects.toThrow();
  const next = await client.verify(subjects, tokens.access, {
    refresh: tokens.refresh,
  });
  expect(next.access).toBeDefined();
  expect(next.refresh).toBeDefined();
  expect(next.access).not.toEqual(tokens.access);
  expect(next.refresh).not.toEqual(tokens.refresh);
  await client.verify(subjects, next.access!);
});
