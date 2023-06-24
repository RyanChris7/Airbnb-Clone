import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    //Sign In Method Via Github
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    //Sign In Method Via Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Manual Sign In Mehtod using Credentials
    CredentialsProvider({
      name: "credentials",
      //credentials is the input information from user
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // if the credentials ("email or password missing") then it will throw an error
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        //check if the user exist
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid User Credentials");
        }

        //compare user input password with the saved password in the database
        const passowrdMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passowrdMatch) {
          throw new Error("Password Does Not Match");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  // Allow debug only in development environment
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
