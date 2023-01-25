// /expenses => shared layout
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";
import { requireUserSession } from "~/data/auth.server";
import { getExpenses } from "~/data/expenses.server";

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  const hasExpenses = expenses && expenses.length > 0;

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Adicionar Despesa</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Carregar Dados</span>
          </a>
        </section>
        {hasExpenses && <ExpensesList expenses={expenses} />}
        {!hasExpenses && (
          <section id="no-expenses">
            <h1>Não foram encontradas despesas</h1>
            <p>
              Tente <Link to="add">adicionar despesas</Link> agora!
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);

  const expenses = await getExpenses(userId);
  // return expenses; // return json(expenses);
  return json(expenses, {
    headers: {
      "Cache-Control": "max-age=3",
    },
  });

  // if (!expenses || expenses.length === 0) {
  //   throw json(
  //     { message: "Não foi possível encontrar despesas." },
  //     { status: 404, statusText: "Nenhuma despesa encontrada." }
  //   );
  // }
}

// export function CatchBoundary() {
//   return <p>Erro</p>
// }

export function meta() {
  return {
    title: "Despesas.",
    description: "Adicionar e Carregar Despesas.",
  };
}

export function headers({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control"), // 60 minutes
  };
}
