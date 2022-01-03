import React from 'react';
import ProductCard from './ProductCard';
import { v4 as uuid } from 'uuid';
import loading from '/assets/loading.svg';
import Image from 'next/image';

function ProductList({ products }) {
    return (
        <div
            className={
                'flex flex-row flex-wrap gap-2 md:gap-8 xl:gap-16 py-2 px-8 mx-auto overflow-y-auto w-full h-full items-start justify-center md:justify-start scrollbar-thin scrollbar-rounded scrollbar-thumb-gray-700k'
            }>
            {!products ? (
                <div className={'relative aspect-square w-16 text-black'}>
                    <Image
                        src={loading}
                        layout={'fill'}
                        className={'text-black'}
                    />
                </div>
            ) : (
                products?.map(item => (
                    <ProductCard product={item} key={uuid()} />
                ))
            )}
        </div>
    );
}

export default ProductList;
