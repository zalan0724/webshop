import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '../../../utils/db/index';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    secret: 'exrthYGZWbUEiLpFWVne',
    callbacks: {
        async session({ session, token }) {
            const emptyData = {
                cart: [],
                compare: [],
                build: [],
            };

            session.user.id = token.sub;
            try {
                const docRef = db.collection('Users').doc(token.sub);
                docRef.get().then(doc => {
                    if (!doc.exists) {
                        docRef.set({ ...emptyData });
                        session.user.cloudData = { ...emptyData };
                    } else {
                        session.user.cloudData = { ...doc.data() };
                    }
                });
            } catch (e) {
                session.user.cloudData = {};
            }

            return session;
        },
    },
});
