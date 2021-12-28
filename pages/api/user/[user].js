import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export default async function handler(req, res) {
    const { user } = req.query;
    const docRef = doc(db, 'Users', `${user}`);

    try {
        if (req.method === 'GET') {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const cloudData = docSnap.data();
                res.status(200).json(cloudData);
            }
        } else if (req.method === 'POST') {
            await setDoc(docRef, { ...req.body });
            const docSnap = await getDoc(docRef);
            res.status(200).json(docSnap.data());
        } else if (req.method === 'PUT') {
            await updateDoc(docRef, { ...req.body });
            const docSnap = await getDoc(docRef);
            res.status(200).json(docSnap.data());
        } else if (req.method === 'DELETE') {
            await deleteDoc(docRef);
            const docSnap = await getDoc(docRef);
            res.status(200).json(docSnap.data());
        }
    } catch (e) {
        res.status(400).end();
    }
}
