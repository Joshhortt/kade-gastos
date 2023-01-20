import { Form, Link } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        {/* Delete */}
        {/* <button onClick={deleteExpenseItemHandler}>Apagar</button> */}
        {/* Edit */}
        <Form method="delete" action={`/expenses/${id}`}>
          <button>Apagar</button>
        </Form>
        <Link to={id}>Editar</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
