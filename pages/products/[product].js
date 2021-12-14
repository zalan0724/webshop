import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ItemDisplay from '../../components/productDisplay/ItemDisplay';
import Head from 'next/head';
import FilterProducts from '../../components/productDisplay/FilterProducts';

const fetcher = url => fetch(url).then(res => res.json());

const filterData = (data, minPrice, maxPrice, selectedBrands) => {
    return data?.filter(
        product =>
            product.price >= minPrice &&
            product.price <= maxPrice &&
            selectedBrands.includes(product.brand)
    );
};

export default function Product() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [allBrands, setAllBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const router = useRouter();
    const { product } = router.query;

    const { data, error } = useSWR(`/api/data/${product}`, fetcher);

    useEffect(() => {
        if (data) {
            setMinPrice(data[0].prices.minPrice);
            setMaxPrice(data[0].prices.maxPrice);
            setSelectedBrands([...data[0].brands]);
            setAllBrands([...data[0].brands]);
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
                    metadata={{ minPrice, maxPrice, allBrands, selectedBrands }}
                    setters={{ setMinPrice, setMaxPrice, setSelectedBrands }}
                />
                <ItemDisplay
                    products={filterData(
                        data?.slice(1),
                        minPrice,
                        maxPrice,
                        selectedBrands
                    )}
                />
            </div>
        </>
    );
}
