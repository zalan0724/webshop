import React from 'react';
import { useSelector } from 'react-redux';
import { getComparedItems } from '../features/compare/comparedItemsSlice';
import Table from '../components/comparingPage/Table';
import Head from 'next/head';

function Compare() {
    const products = useSelector(getComparedItems);

    return (
        <>
            <Head>
                <title>Compare Parts</title>
                <meta name="theme-color" content="#FFFFFF" />
            </Head>
            <div
                className={
                    'flex justify-center items-center w-screen h-screen bg-gray-100 pt-24 pb-4 px-6 md:px-12 box-border'
                }>
                <div
                    className={
                        'flex justify-center items-center w-full h-full bg-white p-8 box-border rounded-lg overflow-auto shadow-lg'
                    }>
                    {products.length === 0 ? (
                        'No product selected'
                    ) : (
                        <Table products={products} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Compare;
