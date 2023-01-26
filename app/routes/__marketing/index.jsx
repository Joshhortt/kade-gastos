// your-domain.com/

import { Link } from "@remix-run/react";
import marketingStyles from "~/styles/marketing.css";
import { FaArrowRight, FaMoneyCheck, FaChartBar } from "react-icons/fa";

export default function Index() {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaMoneyCheck />
          <h2>Gestão de despesas em tempo real</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img
              src="images/expenses-management.jpg"
              alt="A list of expenses."
            />
          </div>
          <div className="marketing-explanation">
            <p>Faça a gestão das suas despesas aqui!</p>
            <p>
              <Link className="cta" to="/expenses">
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
          <h2>Análise detalhada</h2>
        </header>
        <div className="marketing-content">
          <p className="marketing-explanation">
            Beneficie de uma Análise estatística &
            <br />
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
    "Cache-Control": parentHeaders.get("Cache-Control"),
  };
}

export const handle = { disableJS: true };
