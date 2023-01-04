import ChartBar from "./ChartBar";

function Chart({ expenses }) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Abr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dez", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <section>
      {/* Monthly Expenses */}
      <h2>Despesas mensais</h2>
      <ol className="chart">
        {chartDataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </ol>
    </section>
  );
}

export default Chart;
