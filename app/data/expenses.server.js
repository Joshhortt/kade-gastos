import { prisma } from "./database.server";

export async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        // User: { connect: { id: userId } },
      },
    });
  } catch (error) {
    throw new Error("Failed to add expense.");
  }
}
