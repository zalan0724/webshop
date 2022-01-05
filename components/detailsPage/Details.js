import React from 'react';
import { v4 as uuid } from 'uuid';

function Details({ product }) {
    return (
        <div
            className={
                'bg-white relative mdcol-span-1 shadow-lg rounded-2xl font-roboto text-xl p-6'
            }>
            <p className={'font-exo font-bold text-4xl mb-8'}>{product.Name}</p>
            <div className={'relative overflow-y-auto'}>
                {Object.keys(product)
                    .filter(key => !['Link', 'id', 'Name'].includes(key))
                    .map(param => (
                        <p
                            key={uuid()}
                            className={
                                'my-1 py-1 border-box border-t border-gray-200 ml-4'
                            }>
                            <span className={'text-slate-900 font-light'}>
                                {param}:{' '}
                            </span>
                            <span className={'text-black font-medium'}>
                                {product[param]}
                            </span>
                        </p>
                    ))}
            </div>
        </div>
    );
}

export default Details;
