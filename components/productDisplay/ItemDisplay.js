import React from 'react';
import ProductCard from './ProductCard';

function ItemDisplay({ products }) {
    return (
        <div
            className={
                'flex justify-start items-start flex-wrap justify-items-start gap-8 py-2 px-8 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-black'
            }>
            {!products ? (
                <p>No items available</p>
            ) : (
                products?.map((item, index) => (
                    <ProductCard product={item} key={index} />
                ))
            )}
        </div>
    );
}

export default ItemDisplay;
