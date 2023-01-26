// /pricing

import { FaTrophy, FaHandshake } from "react-icons/fa";
import marketingStyles from "~/styles/marketing.css";
import PricingPlan from "~/components/marketing/PricingPlan";

const PRICING_PLANS = [
  {
    id: "p1",
    title: "Basico",
    price: "Grátis",
    perks: ["1 Utilizador", "Até 1000 despesas/ano", "Análise básica"],
    icon: FaHandshake,
  },
  {
    id: "p2",
    title: "Pro",
    price: "\u20AC3.99/mês",
    perks: [
      "Utilizadores ilimitados",
      "Despesas/ano ilimitadas",
      "Análise detalhada",
    ],
    icon: FaTrophy,
  },
];

export default function PricingPage() {
  return (
    <main id="pricing">
      <h2>A Calculadora de Gastos para Orçamentos Pessoais</h2>
      <ol id="pricing-plans">
        {PRICING_PLANS.map((plan) => (
          <li key={plan.id} className="plan">
            <PricingPlan
              title={plan.title}
              price={plan.price}
              perks={plan.perks}
              icon={plan.icon}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}
export function links() {
  return [{ rel: "stylesheet", href: marketingStyles }];
}

export function meta() {
  return {
    title: "Pacotes - A Calculadora de Gastos para Orçamentos Pessoais",
    description: "Veja os nossos pacotes de preços.",
  };
}

export function headers({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control"), // 60 minutes
  };
}

export const handle = { disableJS: true };
