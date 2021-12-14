import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ItemDisplay from '../../components/productDisplay/ItemDisplay';
import Head from 'next/head';
import FilterProducts from '../../components/productDisplay/FilterProducts';

const fetcher = url => fetch(url).then(res => res.json());

const filterData = (data, minPrice, maxPrice) => {
    return data?.filter(
        product => product.price >= minPrice && product.price <= maxPrice
    );
};

export default function Product() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const router = useRouter();
    const { product } = router.query;

    const { data, error } = useSWR(`/api/data/${product}`, fetcher);

    useEffect(() => {
        if (data) {
            setMinPrice(data[0].minPrice);
            setMaxPrice(data[0].maxPrice);
        }
    }, [data]);

    return (
        <>
            <Head>
                <title>{product}</title>
            </Head>
            <div
                className={
                    'grid grid-flow-col px-6 md:px-12 bg-gray-100 h-screen box-border pt-24'
                }>
                <FilterProducts
                    metadata={{ minPrice, maxPrice }}
                    setters={{ setMinPrice, setMaxPrice }}
                />
                <ItemDisplay
                    products={filterData(data?.slice(1), minPrice, maxPrice)}
                />
            </div>
        </>
    );
}
