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
                <meta name="theme-color" content="#f5f5f4" />
            </Head>
            <div
                className={
                    'flex justify-center items-center w-screen h-screen bg-stone-100 pt-24 pb-4 px-6 md:px-12 box-border'
                }>
                <div
                    className={
                        'flex justify-center items-center w-full h-full p-8 bg-stone-100 box-border rounded-lg overflow-auto'
                    }>
                    {products.length === 0 ? (
                        'No details selected'
                    ) : (
                        <Table products={products} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Compare;
