import { Link } from "@remix-run/react";
import { FaBalanceScale } from "react-icons/fa";

function Logo() {
  return (
    <h1 id="logo">
      <Link to="/">
        <FaBalanceScale /> Kadê Gastos
      </Link>
    </h1>
  );
}

export default Logo;
