import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import sharedStyles from "~/styles/shared.css";
import Error from "./components/util/Error";
// import MainHeader from "./components/navigation/MainHeader";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Document({ title, children }) {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* <MainHeader /> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>
            {caughtResponse.data?.message ||
              "Algo correu mal. Por favor, tente novamente mais tarde."}
          </p>
          <p>
            Voltar à <Link to="/">segurança</Link>
          </p>
        </Error>
      </main>
    </Document>
  );
}

export function ErrorBoundary() {}

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
