// /expenses/add

import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

import { addExpense } from "~/data/expenses.server";

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

  await addExpense(expenseData);
  return redirect("/expenses");
}
