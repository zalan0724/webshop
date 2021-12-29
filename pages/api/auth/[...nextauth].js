import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';

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

            const docRef = doc(db, 'Users', token.sub);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const cloudData = docSnap.data();
                session.user.cloudData = { ...cloudData };
            } else {
                await setDoc(docRef, emptyData);
                session.user.cloudData = { ...emptyData };
            }

            return session;
        },
    },
});
