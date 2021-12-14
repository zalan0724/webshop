import React from 'react';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartItemSlice';

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div
            className={
                'flex flex-col justify-between items-start w-64 h-80 bg-white relative p-4 shadow-lg rounded-2xl hover:shadow-2xl duration-200 cursor-pointer box-border mt-24'
            }>
            <div className={'relative h-full w-full'}>
                <div className={'relative flex justify-center w-full h-24'}>
                    <div className={'absolute w-4/5 aspect-square -top-full'}>
                        <div className={'relative h-full w-full'}>
                            <Image
                                src={product.link}
                                layout={'fill'}
                                quality={50}
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
                <p className={'font-bold text-xl'}>
                    {product.brand + ' ' + product.name}
                </p>
                <p className={'text-lg'}>${product.price}</p>
            </div>

            <div className={'flex flex-shrink w-full gap-x-4'}>
                <button
                    className={
                        'w-full h-14 border-black border-2 rounded-lg text-black font-light text-lg bg-white shadow-md'
                    }>
                    Details
                </button>
                <button
                    className={
                        'h-14 w-14 border-2 border-black bg-black justify-self-start rounded-lg text-xl text-white font-light p-2 shadow-md'
                    }
                    onClick={() => {
                        dispatch(addItem({ ...product }));
                    }}>
                    <ShoppingCartIcon className={'h-full'} />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
