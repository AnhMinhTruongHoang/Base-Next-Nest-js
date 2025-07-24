import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { sendRequest } from "./utils/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },

      //@ts-ignore
      authorize: async (credentials) => {
        let user = null;

        /// call backend
        const res = await sendRequest({
          method: "POST",
          url: "http://localhost:8080/api/v1/auth/login",
          body: {
            username: credentials.email,
            password: credentials.password,
          },
        });

        ///

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "auth/login",
  },
});
