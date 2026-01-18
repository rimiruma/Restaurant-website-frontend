import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // Mock Login
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "123456"
        ) {
          // Return a mock user object
          return {
            id: "1",
            name: "Mock User",
            email: "test@example.com",
          }
        }
        // Login failed
        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
})
