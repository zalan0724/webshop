import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '../../components/productsPage/ProductList';
import Head from 'next/head';
import ProductsFilter from '../../components/productsPage/ProductsFilter';
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
    const { data } = useSWR(`/api/products/${productType}`, fetcher);

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
                <title>
                    {productType &&
                        'Products: ' +
                            productType?.charAt(0).toUpperCase() +
                            productType?.slice(1)}
                </title>
                <meta name="theme-color" content="#f5f5f4" />
            </Head>
            <div
                className={
                    'flex flex-col justify-start items-center min-h-screen w-screen pt-28 px-6 md:px-12 bg-stone-100 box-border'
                }>
                <div
                    className={
                        'flex flex-col flex-nowrap lg:flex-row justify-between w-full items-start gap-x-4'
                    }>
                    <ProductsFilter
                        metadata={{
                            minPrice,
                            maxPrice,
                            allBrands,
                            selectedBrands,
                        }}
                        setters={{
                            setMinPrice,
                            setMaxPrice,
                            setSelectedBrands,
                        }}
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
            </div>
        </>
    );
}
