import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useTransition as useNavigation,
} from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const validationErrors = useActionData();

  const authMode = searchParams.get("mode") || "login";

  const submitBtnCaption =
    authMode === "login" ? "Login" : "Criar novo utilizador";
  const toggleBtnCaption =
    authMode === "login"
      ? "Criar novo utilizador"
      : "Iniciar sessão com utilizador existente";

  const isSubmitting = navigation.state !== "idle";

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
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Autenticando..." : submitBtnCaption}
        </button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleBtnCaption}
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
