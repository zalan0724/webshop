import { db } from '../../../utils/db/index';

export default async function handler(req, res) {
    const { user } = req.query;
    const docRef = db.collection('Users').doc(user);

    try {
        if (req.method === 'GET') {
            docRef.get().then(doc => {
                if (!doc.exists) throw 'Failed to fetch user data';
                else res.status(200).json(doc.data());
            });
        } else if (req.method === 'POST') {
            await docRef.set({ ...req.body });
            docRef.get().then(doc => {
                if (!doc.exists) throw 'Failed to fetch user data';
                else res.status(200).json(doc.data());
            });
        } else if (req.method === 'PUT') {
            await docRef.update({ ...req.body });
            docRef.get().then(doc => {
                if (!doc.exists) throw 'Failed to fetch user data';
                else res.status(200).json(doc.data());
            });
        } else if (req.method === 'DELETE') {
            await docRef.delete();
            res.status(200).end();
        } else res.status(400).end();
    } catch (e) {
        res.status(500).end();
    }
}
