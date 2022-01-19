import React from 'react';
import ProductCard from './ProductCard';
import { v4 as uuid } from 'uuid';
import loading from '/assets/loading.svg';
import Image from 'next/image';

function ProductList({ products }) {
    return (
        <div className={'flex w-full justify-center'}>
            {!products ? (
                <div
                    className={
                        'relative aspect-square w-16 text-black box-border'
                    }>
                    <Image
                        src={loading}
                        layout={'fill'}
                        className={'text-black'}
                    />
                </div>
            ) : (
                <div
                    className={
                        'grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-2 md:gap-x-4 xl:gap-x-8 lg:gap-y-14 pb-8 px-2 overflow-y-auto'
                    }>
                    {products?.map(item => (
                        <ProductCard product={item} key={uuid()} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;
