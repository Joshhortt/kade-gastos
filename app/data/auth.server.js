import { hash } from "bcryptjs";

import { prisma } from "./database.server";

export async function signup({ email, password }) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error("Já existe um utilizador com este e-mail.");
    error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({ data: { email: email, password: passwordHash } });
}
