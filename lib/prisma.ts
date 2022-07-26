import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (global.prisma === undefined) {
  global.prisma = prisma;
}

console.log(prisma);
