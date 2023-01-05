// /expenses/<some-id> => expenses/expense-1 OR expenses/e-1,

import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
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
