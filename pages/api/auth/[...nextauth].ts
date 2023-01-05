import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET as string,
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 dni
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET as string,
	},
};

export default NextAuth(authOptions);
