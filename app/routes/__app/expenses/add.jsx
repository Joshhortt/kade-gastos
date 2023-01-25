// /expenses/add

import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { validateExpenseInput } from "~/data/validation.server";
import { addExpense } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.server";

export default function AddExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    //navigate programmatically
    navigate("..");
    // navigate("/expenses");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
export async function action({ request }) {
  const userId = await requireUserSession(request);

  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (err) {
    // technically this err obj
    // (validationErrorsObject) is obtained from
    // validation.server.js
    return err;
  }

  await addExpense(expenseData, userId);
  return redirect("/expenses");
}

export function meta({ params, location, data, parentsData }) {
  const expense = parentsData["routes/__app/expenses"].find(
    (expense) => expense.id === params.id
  );
  return {
    title: expense.title,
    description: "Adicionar Despesa.",
  };
}
