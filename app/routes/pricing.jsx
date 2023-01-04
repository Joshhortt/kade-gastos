// /pricing

// /pricing

import { FaTrophy, FaHandshake } from "react-icons/fa";

import PricingPlan from "~/components/marketing/PricingPlan";

const PRICING_PLANS = [
  {
    id: "p1",
    title: "Basico", // Basic
    price: "Grátis", // Free forever
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: FaHandshake,
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/mês", //$9.99/month
    perks: [
      "Utilizadores ilimitados",
      "Despesas/ano ilimitadas",
      "Análise detalhada",
    ], // "Unlimited Users", "Unlimited expenses/year", "Detailed analytics"
    icon: FaTrophy,
  },
];

export default function PricingPage() {
  return (
    <main id="pricing">
      {/* Great Product, Simple Pricing */}
      <h2>Grande Produto, Preços Acessíveis</h2>
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

export function meta() {}
