import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemDisplay from '../../components/productDisplay/ItemDisplay';
import Head from 'next/head';
import FilterProducts from '../../components/productDisplay/FilterProducts';

const filterData = (data, minPrice, maxPrice, selectedBrands) => {
    return data?.filter(
        product =>
            product.price >= minPrice &&
            product.price <= maxPrice &&
            selectedBrands.includes(product.brand)
    );
};

export default function Product({ data }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [allBrands, setAllBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const router = useRouter();
    const { product } = router.query;

    useEffect(() => {
        if (data) {
            setMinPrice(data.metadata.prices.minPrice);
            setMaxPrice(data.metadata.prices.maxPrice);
            setSelectedBrands([...data.metadata.brands]);
            setAllBrands([...data.metadata.brands]);
        }
    }, [data]);

    return (
        <>
            <Head>
                <title>{product}</title>
                <meta name="theme-color" content="#FFFFFF" />
            </Head>
            <div
                className={
                    'grid grid-flow-col px-6 md:px-12 bg-gray-100 h-screen box-border pt-24'
                }>
                <FilterProducts
                    metadata={{ minPrice, maxPrice, allBrands, selectedBrands }}
                    setters={{ setMinPrice, setMaxPrice, setSelectedBrands }}
                />
                <ItemDisplay
                    products={filterData(
                        data?.products,
                        minPrice,
                        maxPrice,
                        selectedBrands
                    )}
                />
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(
        process.env.NEXTAUTH_URL + '/api/data/' + params.product
    );
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}
