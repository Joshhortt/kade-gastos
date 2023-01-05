import { NavLink } from "@remix-run/react";

import Logo from "../util/Logo";

function ExpensesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            {/* Manage Expenses */}
            <NavLink to="/expenses" end>
              Gerir despesas
            </NavLink>
          </li>
          <li>
            {/* Analyze Expenses */}
            <NavLink to="/expenses/analysis">Análise despesas</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        {/* Logout */}
        <button className="cta">Saír</button>
      </nav>
    </header>
  );
}

export default ExpensesHeader;
