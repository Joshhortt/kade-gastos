import {
  Form,
  Link,
  useActionData,
  useTransition as useNavigation,
} from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-01-10
  const validationErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  // const submit = useSubmit();

  // function submitHandler(event) {
  //   event.preventDefault();
  //   // perform your own validation
  //   // ...
  //   submit(event.target, {
  //     // action: '/expenses/add',
  //     method: "post",
  //   });
  // }

  return (
    <Form
      method="post"
      className="form"
      id="expense-form"
      // onSubmit={submitHandler}
    >
      <p>
        {/* Expense Title */}
        <label htmlFor="title">Nome da Despesa</label>
        <input type="text" id="title" name="title" required maxLength={30} />
      </p>
      <div className="form-row">
        <p>
          {/* Amount */}
          <label htmlFor="amount">Quantia</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
          />
        </p>
        <p>
          {/* Date */}
          <label htmlFor="date">Data</label>
          <input type="date" id="date" name="date" max={today} required />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        {/* Save Expense */}
        <button disabled={isSubmitting}>
          {isSubmitting ? "a guardar..." : "Guardar"}
        </button>
        {/* Cancel */}
        <Link to="..">Cancelar</Link>
        {/* This line of code below also cancels - goes to the parent route */}
        {/* <Link to="/expenses">Cancelar</Link> */}
      </div>
    </Form>
  );
}

export default ExpenseForm;
