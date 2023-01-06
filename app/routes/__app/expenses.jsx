// /expenses => shared layout

import { Link, Outlet } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";

const TESTING_EXPENSES = [
  {
    id: "e1",
    title: "Primeira Despesa",
    amount: 101.99,
    date: new Date().toISOString(),
  },

  {
    id: "e2",
    title: "Segunda Despesa",
    amount: 102.99,
    date: new Date().toISOString(),
  },
];

export default function ExpensesLayout() {
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
            <span>Carrega dados brutos</span>
          </a>
        </section>
        <ExpensesList expenses={TESTING_EXPENSES} />
      </main>
    </>
  );
}
