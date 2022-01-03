import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '../../components/productsPage/ProductList';
import Head from 'next/head';
import FilterProducts from '../../components/productsPage/FilterProducts';
import useSWR from 'swr';
import axios from 'axios';

const filterData = (data, minPrice, maxPrice, selectedBrands) => {
    return data?.filter(
        product =>
            product.price >= minPrice &&
            product.price <= maxPrice &&
            selectedBrands.includes(product.brand)
    );
};

export default function ProductType() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [allBrands, setAllBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const router = useRouter();
    const { productType } = router.query;

    const fetcher = url => axios.get(url).then(res => res.data);
    const { data, error } = useSWR(`/api/products/${productType}`, fetcher);

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
                <title>{productType}</title>
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
                <ProductList
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
