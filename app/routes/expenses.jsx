// /expenses => shared layout

import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";

const TESTING_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 101.99,
    date: new Date().toISOString(),
  },

  {
    id: "e2",
    title: "Second Expense",
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

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
