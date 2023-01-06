import { Link, useSearchParams } from "@remix-run/react";
import { FaLock } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";
  // Login
  const submitBtnCaption =
    authMode === "login" ? "Login" : "Criar novo utilizador";
  // Iniciar sessão com utilizador existente
  const toggleBtnCaption =
    authMode === "login"
      ? "Criar novo utilizador"
      : "Iniciar sessão com utilizador existente";

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        <FaLock />
      </div>
      <p>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitBtnCaption}</button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleBtnCaption}
        </Link>
      </div>
    </form>
  );
}

export default AuthForm;
