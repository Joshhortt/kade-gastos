// /expenses => shared layout

import { Outlet } from "@remix-run/react";
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
        <ExpensesList expenses={TESTING_EXPENSES} />
      </main>
    </>
  );
}
