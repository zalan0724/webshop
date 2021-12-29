import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

const app = admin.apps.length
    ? admin.app
    : admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
      });

const db = admin.firestore();

export { db };
