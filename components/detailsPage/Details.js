import React from 'react';
import { v4 as uuid } from 'uuid';

function Details({ product }) {
    return (
        <div className={'flex flex-col justify-between relative text-xl p-6'}>
            <div>
                <p className={'font-exo font-bold text-4xl mb-8'}>
                    {product.Name}
                </p>
                <div className={'relative overflow-y-auto'}>
                    {Object.keys(product)
                        .filter(key => !['Link', 'id', 'Name'].includes(key))
                        .map(param => (
                            <p
                                key={uuid()}
                                className={
                                    'my-1 py-1 border-box border-t border-stone-300 ml-4'
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
        </div>
    );
}

export default Details;
