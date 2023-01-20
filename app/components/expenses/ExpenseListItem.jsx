import { Link, useFetcher } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  // const submit = useSubmit();
  const fetcher = useFetcher();

  function deleteExpenseItemHandler() {
    const proceed = confirm("Tem a certeza! Que quer apagar esta despesa?");
    // submit(null, {
    //   method: "delete",
    //   action: `/expenses/${id}`,
    // });
    if (!proceed) {
      return;
    }

    fetcher.submit(null, {
      method: "delete",
      action: `/expenses/${id}`,
    });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="expense-item locked">
        <p>Eliminando...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        {/* Delete */}
        <button onClick={deleteExpenseItemHandler}>Apagar</button>
        {/* Edit */}
        {/* <Form method="delete" action={`/expenses/${id}`}>
          <button>Apagar</button>
        </Form> */}
        <Link to={id}>Editar</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
