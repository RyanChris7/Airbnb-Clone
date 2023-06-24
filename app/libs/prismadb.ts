//avoid next.js 13 hot reloading giving warning in terminal which is the best practice for prisma in next.js
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// client variable to search for "globalthis.prisma or make a new client"
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = client; //check if we are in development environment then set globalthis.prisma to client.

export default client;
