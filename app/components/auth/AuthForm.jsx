import { Link, useSearchParams, Form } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

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
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === "login" ? <FaLock /> : <FaUserPlus />}
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
    </Form>
  );
}

export default AuthForm;
