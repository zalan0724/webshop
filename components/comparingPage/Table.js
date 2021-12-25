import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import getProductParams from '../../productParams';

export const getComparedItemsParams = products => {
    const keys = [];
    products
        .map(product => getProductParams(product.collection, product))
        .forEach(product => keys.push(...Object.keys(product)));

    return [...new Set(keys)];
};

function Table({ products }) {
    const removedParams = ['Price'];

    const filteredParams = [
        ...getComparedItemsParams(products).filter(
            param => !removedParams.includes(param)
        ),
    ];

    const filteredProducts = [
        ...products.map(product =>
            getProductParams(product.collection, product)
        ),
    ];

    return (
        <table className={'w-full h-full font-quicksand'}>
            <thead>
                <tr>
                    <th className={'w-32'} />
                    {products.map(product => (
                        <th
                            key={uuid()}
                            className={
                                'border-l border-gray-200 border-collapse px-4 text-left'
                            }>
                            <div className={'relative aspect-square h-24'}>
                                <Image
                                    src={product.link}
                                    layout={'fill'}
                                    priority={true}
                                />
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredParams.map((param, index) => (
                    <tr
                        key={uuid()}
                        className={`${
                            index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                        }`}>
                        <th className={'w-32 font-extrabold'}>{param}</th>
                        {filteredProducts.map(product => (
                            <th
                                key={uuid()}
                                className={
                                    'border-l border-gray-200 text-left px-4 font-medium'
                                }>
                                {product[param]}
                            </th>
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className={'text-white bg-black rounded-lg'}>
                    <th className={'p-2 w-32'}>Price</th>
                    {filteredProducts.map(product => (
                        <th key={uuid()} className={'p-2 text-left'}>
                            {product['Price']}
                        </th>
                    ))}
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;
