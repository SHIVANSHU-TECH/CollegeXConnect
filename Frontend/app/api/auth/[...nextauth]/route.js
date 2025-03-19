import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

import CredentialsProvider from "next-auth/providers/credentials";
const api_url = process.env.NEXT_PUBLIC_API_URL;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(`${api_url}/v1/user/login`, {
            email: credentials.email,
            password: credentials.password,
          });

          const user = res.data;

          if (user) {
            return user;
          }

          return null;
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const res = await axios.post(`${api_url}/v1/user/google-login`, {
          name: user.name,
          email: user.email,
          image: user.profile_img,
          provider: account.provider,
        });

        if (res.data.success) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error saving user to DB:", error);
        return false;
      }
    },

    async session({ session, token }) {
      
      session.user = {
        id:token.id,
        name: token.name,
        email: token.email,
        profile_img: token.profile_img,
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.password = user.password;
        token.profile_img = user.profile_img;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
