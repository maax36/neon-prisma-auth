import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            console.log('credentials', credentials);

            if('1' === credentials.username && '1' === credentials.password)
                return {id: '1', name: 'jsmith', email: 'jsmith@exampe.com'};
            return null;
          
        }
      })
  ],
}

export default function Auth(...params) {
    const [req, res] = params;
    console.log('<<<', req.method, req.query);
    NextAuth(authOptions) (...params);
}