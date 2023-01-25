// your-domain.com/

import { Link } from "@remix-run/react";
import marketingStyles from "~/styles/marketing.css";
import { FaArrowRight, FaDollarSign, FaChartBar } from "react-icons/fa";

export default function Index() {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaDollarSign />
          <h2>A Central de Controle das suas Despesas</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img
              src="images/expenses-management.jpg"
              alt="A list of expenses."
            />
          </div>
          <div className="marketing-explanation">
            {/* Manage your expenses in one central place. */}
            <p>Faça a Gestão das suas Despesas aqui</p>
            <p>
              <Link className="cta" to="/expenses">
                {/* Get Started */}
                <span>Iniciar</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          {/* Detailed Analytics */}
          <h2>Análise detalhada</h2>
        </header>
        <div className="marketing-content">
          {/* Benefit from best-in-class analytics to understand your spending patterns. */}
          <p className="marketing-explanation">
            Beneficie de uma melhor Análise &<br />
            Controlo Orçamental dos seus Gastos
          </p>
          <div className="marketing-image">
            <img src="images/expenses-chart.jpg" alt="A demo bar chart." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: marketingStyles }];
}

export function meta() {
  return {
    title: "Kadê Gastos - A Central de Controle das suas Despesas.",
    description: "Faça a Gestão das suas Despesas num só Local.",
  };
}

export function headers({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control"), // 60 minutes
  };
}
