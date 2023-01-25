// /expenses/analysis
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import expensesStyles from "~/styles/expenses.css";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { getExpenses } from "~/data/expenses.server";
import Error from "~/components/util/Error";
import { requireUserSession } from "~/data/auth.server";

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);

  const expenses = await getExpenses(userId);

  if (!expenses || expenses.length === 0) {
    throw json(
      {
        message:
          "Não foi possível carregar as despesas para a análise solicitada.",
      },
      {
        status: 404,
        statusText: "Despesas não encontradas",
      }
    );
  }

  return expenses; // return json(expenses);
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  return (
    <main>
      <Error title={caughtResponse.statusText}>
        <p>
          {caughtResponse.data?.message ||
            "Algo correu mal - Não foi possível carregar as despesas."}
        </p>
      </Error>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
