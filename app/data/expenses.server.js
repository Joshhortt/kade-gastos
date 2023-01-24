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
    throw new Error("Falha em adicionar despesa.");
  }
}

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { date: "desc" },
    });
    return expenses;
  } catch (error) {
    // console.log(error);
    throw new Error("Não foi possível obter todas as despesas.");
  }
}

export async function getExpense(id) {
  try {
    const expense = await prisma.expense.findFirst({ where: { id } });
    return expense;
  } catch (error) {
    // console.log(error);
    throw new Error("Não foi possível obter a despesa.");
  }
}

export async function updateExpense(id, expenseData) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    // console.log(error);
    throw new Error("Não foi possível atualizar a despesa.");
  }
}

export async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id },
    });
  } catch (error) {
    // console.log(error);
    throw new Error("Não foi possível apagar a despesa.");
  }
}
