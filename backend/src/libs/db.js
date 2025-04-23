import { PrismaClient } from "../generated/prisma/index.js";
import { env } from "./env.js";

const globalForPrisma = globalThis;
// console.log(globalThis);

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
