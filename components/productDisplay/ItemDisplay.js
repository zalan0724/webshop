import React from 'react';
import ProductCard from './ProductCard';
import { v4 as uuid } from 'uuid';

function ItemDisplay({ products }) {
    return (
        <div
            className={
                'flex flex-row flex-wrap gap-2 md:gap-8 xl:gap-16 py-2 px-8 mx-auto overflow-y-auto w-full h-full items-start justify-start scrollbar-thin scrollbar-thumb-black'
            }>
            {!products ? (
                <p>No items available</p>
            ) : (
                products?.map(item => (
                    <ProductCard product={item} key={uuid()} />
                ))
            )}
        </div>
    );
}

export default ItemDisplay;
