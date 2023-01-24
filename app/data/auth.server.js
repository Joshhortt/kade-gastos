// SignUp logic

import { prisma } from "./database.server";

export async function signup({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error(
      "Já existe um utilizador com este e-mail fornecido."
    );
    error.status = 422;
    throw error;
  }

  await prisma.user.create({ data: { email: email, password: password } });
}
