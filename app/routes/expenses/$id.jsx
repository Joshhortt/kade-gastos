// /expenses/<some-id> => expenses/expense-1 OR expenses/e-1,

import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}
