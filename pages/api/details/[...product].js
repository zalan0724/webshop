import { db } from '../../../utils/db/index';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

export default async function handler(req, res) {
    const { product } = req.query;

    if (req.method === 'GET') {
        try {
            const doc = await db
                .collection(capitalizeFirstLetter(product[0]))
                .doc(product[1])
                .get();
            if (!doc.exists) {
                throw 'Product cannot be found';
            } else {
                res.status(200).json({
                    id: doc.id,
                    productType: product[0],
                    ...doc.data(),
                });
            }
        } catch (e) {
            res.status(500).end();
        }
    } else {
        res.status(400).end();
    }
}
