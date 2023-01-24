// /expenses => shared layout
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";

import ExpensesList from "~/components/expenses/ExpensesList";
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
              Iniciar <Link to="add">adicionar despesas</Link> agora!
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader() {
  const expenses = await getExpenses();
  return expenses;

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
