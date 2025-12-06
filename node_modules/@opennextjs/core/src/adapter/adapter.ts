import type { Context, Hono } from "hono";

export type Adapter<Properties = any> = (
  route: AdapterRoute,
  options: AdapterOptions<Properties>,
) => void;

export type AdapterReturn = ReturnType<Adapter>;

export type AdapterRoute = Hono;
export interface AdapterOptions<Properties> {
  name: string;
  success: (ctx: Context, properties: Properties) => Promise<Response>;
  forward: (ctx: Context, response: Response) => Response;
  set: (ctx: Context, key: string, maxAge: number, value: any) => Promise<void>;
  get: (ctx: Context, key: string) => Promise<any>;
  unset: (ctx: Context, key: string) => Promise<void>;
}
export class AdapterError extends Error {}
export class AdapterUnknownError extends AdapterError {}
