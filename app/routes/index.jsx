// your-domain.com/

import { Link } from "@remix-run/react";
import { FaArrowRight, FaDollarSign, FaChartBar } from "react-icons/fa";

export default function Index() {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaDollarSign />
          <h2>Kadê Gastos</h2>
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
            <p>Gerir as suas despesas num só local.</p>
            <p>
              <Link className="cta" to="/expenses">
                {/* Get Started */}
                <span>Iniciar!</span>
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
            Beneficie da melhor Análise e Controlo Orçamental dos seus gastos
            Padrão.
          </p>
          <div className="marketing-image">
            <img src="images/expenses-chart.jpg" alt="A demo bar chart." />
          </div>
        </div>
      </section>
    </main>
  );
}

export function meta() {}
