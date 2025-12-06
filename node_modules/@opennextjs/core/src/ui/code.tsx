import { CodeAdapterOptions } from "../adapter/code.js";
import { Header, Layout } from "./base.js";

export function CodeStart(props: {
  mode: "email";
  logo?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Header
            title={props.title || "Welcome to the app"}
            description={props.description || "Sign in to get started"}
            logo={props.logo || "A"}
          />

          {/* Form */}
          <form method="post" action="submit">
            <div className="space-y-4">
              <input
                autofocus
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
              <button className="w-full bg-green-700 text-white rounded-lg px-4 py-3 font-medium hover:bg-green-800 transition-colors">
                Continue
              </button>
              <p className="text-sm text-slate-400 text-center">
                We&apos;ll send a pin code to your email
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  ) as string;
}

export function CodeEnter(props: {
  destination?: string;
  mode: "email";
  debugCode?: string;
  logo?: string;
  error?: string;
  claims: Record<string, string>;
}) {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Header
            title="Let's verify your email"
            description={
              props.error
                ? props.error
                : "Check your inbox for the code we sent you"
            }
            logo={props.logo || "A"}
          />

          {/* Form */}
          <form method="post" action="verify">
            <div className="space-y-4">
              <input
                value={props.debugCode}
                autofocus
                minLength={6}
                maxLength={6}
                type="text"
                name="code"
                required
                placeholder="Code"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
              <button className="w-full bg-green-700 text-white rounded-lg px-4 py-3 font-medium hover:bg-green-800 transition-colors">
                Continue
              </button>
            </div>
          </form>
          <form method="post" action="submit">
            {Object.entries(props.claims).map(([key, value]) => (
              <input
                key={key}
                type="hidden"
                name={key}
                value={value}
                className="hidden"
              />
            ))}
            <p className="text-sm text-slate-400 text-center">
              Didn't get code? <button>Resend</button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  ) as string;
}

export function CodeUI(props: {
  title?: string;
  description?: string;
  logo?: string;
}) {
  return {
    length: 6,
    start: async () =>
      new Response(
        CodeStart({
          logo: props.logo,
          title: props.title,
          description: props.description,
          mode: "email",
        }),
        {
          headers: {
            "Content-Type": "text/html",
          },
        },
      ),
    send: async (code, claims) =>
      new Response(CodeEnter({ mode: "email", debugCode: code, claims }), {
        headers: {
          "Content-Type": "text/html",
        },
      }),
    invalid: async (_, claims) => {
      return new Response(
        CodeEnter({
          mode: "email",
          error: "Invalid code, try again",
          claims,
        }),
        {
          headers: {
            "Content-Type": "text/html",
          },
        },
      );
    },
  } satisfies CodeAdapterOptions;
}
