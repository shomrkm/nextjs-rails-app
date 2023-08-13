import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const options: NextAuthOptions = {
  // debug: true,
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      const provider = account?.provider;
      const uid = account?.sub;
      const name = user.name;
      const email = user.email;

      try {
        const response = await axios.post(
          `http://127.0.0.1:3000/auth/:provider/callback`,
          {
            provider: "google",
            uid: "116727722188696075203",
            name: "村上翔太朗",
            email: "shochan1985@gmail.com",
          }
        );
        console.log(response);

        // if (response.status !== 200) {
        //   return false;
        // }
        return true;
      } catch (error) {
        console.log("Error: ", error);
        console.log("Failed to use rail api");
        // TODO: /auth/:provider/callback へのリクエストが Not Found になってしまう。
        // 正常に動かすために暫定的に true を返している
        return true;
      }
    },
    jwt: async ({ token, user, account }) => {
      // console.log("in jwt", { user, token, account });

      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      // console.log("in session", { session, token });

      token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
};
