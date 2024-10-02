import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = global.globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENW !== "production") globalThis.prisma = prismadb;

export default prismadb;
