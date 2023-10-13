import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "text", label: "email" },
        password: { type: "password", label: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }
        console.log(process.env.NEXT_PUBLIC_Backend, "Env variables")
        const url = `${process.env.NEXT_PUBLIC_Backend}/login`;
        console.log(url,"AuthURL")
        const method = "POST";
        const body = JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        });

        const response = await fetch(url, {
          method,
          body,
        }).then((res) => res.json());

        if (!response) {
          throw new Error("SignIn failed");
        }

        const user = response.data;

        return { ...user, name: user.username };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async session({ session, user, token }) {
      return {
       ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        id: token.id,
      };
    // return session
    },

    async jwt({ token, user, account, profile }) {
      return { ...token,...user };
    },
  },
  // cookies:{

  // }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
