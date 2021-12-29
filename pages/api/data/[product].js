import { db } from '/firebase';
import { collection, getDocs } from 'firebase/firestore';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const getAllProducts = () => {
    return ['motherboards', 'graphicscards', 'processors', 'memories'];
};

const getData = async productType => {
    const products = [];
    const docs = await getDocs(
        collection(db, capitalizeFirstLetter(productType))
    );
    docs.forEach(product => {
        products.push({
            id: product.id,
            collection: productType,
            ...product.data(),
        });
    });
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
    const { product } = req.query;

    const products = [];
    try {
        if (product === 'allproducts') {
            for (const productName of getAllProducts()) {
                products.push(...(await getData(productName)));
            }
        } else {
            products.push(...(await getData(product)));
        }
        const metadata = {
            prices: { ...getMinMaxPrices(products) },
            brands: [...getBrandNames(products)],
        };
        res.status(200).json([metadata, ...products]);
    } catch (error) {
        console.log(error);
    }
}
