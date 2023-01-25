import { json } from "@remix-run/node";
import { destroyUserSession } from "~/data/auth.server";

export function action({ request }) {
  if (request.method !== "POST") {
    throw json({ message: "Método de pedido inválido." }, { status: 400 });
  }

  return destroyUserSession(request);
}
