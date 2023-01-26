import { Form, NavLink } from "@remix-run/react";

import Logo from "../util/Logo";

function ExpensesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses" end>
              Gerir Despesas
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">Análise Despesas</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <Form method="post" action="logout">
          <button className="cta">Saír</button>
        </Form>
      </nav>
    </header>
  );
}

export default ExpensesHeader;
