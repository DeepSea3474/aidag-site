import { PropsWithChildren } from "hono/jsx";

export function Layout(props: PropsWithChildren) {
  return (
    <html>
      <head>
        <title>OpenAuthJS</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 p-4">
          <div className="w-full max-w-md space-y-8">{props.children}</div>
        </div>
      </body>
    </html>
  );
}

export function Header(props: {
  logo: string;
  title: string;
  description: string;
}) {
  return (
    <>
      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-12 h-12 bg-green-700 rounded flex items-center justify-center text-white font-bold text-2xl">
          {props.logo}
        </div>
      </div>

      {/* Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold text-white">{props.title}</h1>
        <p className="text-slate-400">{props.description}</p>
      </div>
    </>
  );
}
