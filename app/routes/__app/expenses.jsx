// /expenses => shared layout

import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";

// const TESTING_EXPENSES = [
//   {
//     id: "e1",
//     title: "Primeira Despesa",
//     amount: 101.99,
//     date: new Date().toISOString(),
//   },

//   {
//     id: "e2",
//     title: "Segunda Despesa",
//     amount: 102.99,
//     date: new Date().toISOString(),
//   },
// ];

export default function ExpensesLayout() {
  const expenses = useLoaderData();
  // console.log(expenses);

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
            {/* Load raw data */}
            <span>Carregar Dados </span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}

export function loader() {
  console.log("EXPENSES LOADER");
  return getExpenses();
}
