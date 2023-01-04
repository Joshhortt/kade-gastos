// /expenses/analysis
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

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

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={TESTING_EXPENSES} />
      <ExpenseStatistics expenses={TESTING_EXPENSES} />
    </main>
  );
}
