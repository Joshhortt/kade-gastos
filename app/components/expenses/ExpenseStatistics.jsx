import { useMemo } from "react";

function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

function ExpenseStatistics({ expenses }) {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      {/* Summary Statistics */}
      <h2>Resumo Estatístico</h2>
      <dl id="expense-statistics">
        <div>
          <dt>Total</dt>
          <dd>${sum.toFixed(2)}</dd>
        </div>
        <div>
          {/* Average */}
          <dt>Média</dt>
          <dd>${mean.toFixed(2)}</dd>
        </div>
        <div>
          {/* Min. Amount */}
          <dt>Quantia mínima</dt>
          <dd>${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          {/* Max. Amount */}
          <dt>Quantia máxima</dt>
          <dd>${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
