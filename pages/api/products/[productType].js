import { db } from '../../../utils/db/index';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const getAllProducts = () => {
    return ['motherboards', 'graphicscards', 'processors', 'memories'];
};

const getData = async productType => {
    const products = [];
    const docs = await db.collection(capitalizeFirstLetter(productType)).get();
    docs.forEach(doc =>
        products.push({ id: doc.id, productType, ...doc.data() })
    );
    return products;
};

const getMinMaxPrices = products => {
    const minPrice = Math.min(...products.map(product => product.price));
    const maxPrice = Math.max(...products.map(product => product.price));
    return { minPrice, maxPrice };
};

const getBrandNames = products => {
    const brands = products.map(product => product.brand);
    return [...new Set(brands)];
};

export default async function handler(req, res) {
    const { productType } = req.query;

    if (req.method === 'GET') {
        try {
            const products = [];

            if (productType === 'allproducts') {
                for (const productName of getAllProducts()) {
                    products.push(...(await getData(productName)));
                }
            } else {
                products.push(...(await getData(productType)));
            }
            const metadata = {
                prices: { ...getMinMaxPrices(products) },
                brands: [...getBrandNames(products)],
            };
            res.status(200).json({ metadata, products });
        } catch (error) {
            res.status(500).end();
        }
    } else {
        res.status(400).end();
    }
}
