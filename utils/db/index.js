import admin from 'firebase-admin';

const app =
    global.firebaseApp ??
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_project_id,
            clientEmail: process.env.FIREBASE_client_email,
            privateKey: process.env.FIREBASE_private_key?.replace(/\\n/g, '\n'),
        }),
    });

global.firebaseApp = app;

const db = admin.firestore();

export { app, db };
