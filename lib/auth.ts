import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { NextAuthOptions, DefaultSession, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import type { Adapter } from "next-auth/adapters";

// =======================================================================
// 1. TYPE AUGMENTATION
// Tells TypeScript that our Database User and Session include 'id' & 'role'
// =======================================================================
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}

// =======================================================================
// 2. NEXT AUTH OPTIONS
// =======================================================================
export const authOptions: NextAuthOptions = {
  // Add "as Adapter" right here to silence the type error
  adapter: PrismaAdapter(prisma) as Adapter, 
  
  session: {
    strategy: "jwt",
  },

  // Tells NextAuth to use your custom login page instead of the default ugly one
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials) {
        // 1. Check if inputs exist
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // 2. Find user in the database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // 3. If no user, or they signed up via Google/OAuth (no passwordHash), reject
        if (!user || !user.passwordHash) {
          return null;
        }

        // 4. Compare the provided password with the hashed password in DB
        const isPasswordValid = await compare(credentials.password, user.passwordHash);

        if (!isPasswordValid) {
          return null;
        }

        // 5. Return the user object (This gets passed to the jwt callback below)
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    // This runs when the user logs in. We attach DB user info to the JWT token.
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    // This runs whenever you call getServerSession() or useSession(). 
    // We attach the token info to the active session object.
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },

  // Ensure you have NEXTAUTH_SECRET set in your .env file!
  secret: process.env.NEXTAUTH_SECRET,
};