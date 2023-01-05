// /expenses/raw

const TESTING_EXPENSES = [
  {
    id: "e1",
    title: "Primeira Despesa",
    amount: 101.99,
    date: new Date().toISOString(),
  },

  {
    id: "e2",
    title: "Segunda Despesa",
    amount: 102.99,
    date: new Date().toISOString(),
  },
];

export function loader() {
  return TESTING_EXPENSES;
}
