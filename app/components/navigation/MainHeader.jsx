import Logo from "../util/Logo";

function MainHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {/* Pricing */}
            <a href="/pricing">Preço</a>
          </li>
          <li>
            {/* Expenses */}
            <a href="/expenses">Despesas</a>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <a href="/auth" className="cta">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
