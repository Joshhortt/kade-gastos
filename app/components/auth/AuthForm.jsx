import { FaLock } from "react-icons/fa";

function AuthForm() {
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
        <button>Login</button>
        <a href="/auth">Iniciar sessão com utilizador existente</a>
      </div>
    </form>
  );
}

export default AuthForm;
