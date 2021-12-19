import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartItemSlice';
import MoreButton from './MoreButton';

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div
            className={
                'flex flex-col justify-between items-start w-64 h-80 bg-white relative p-4 shadow-lg rounded-2xl hover:shadow-2xl duration-200 cursor-pointer box-border mt-24 animate-hoverUp'
            }>
            <div className={'relative h-full w-full'}>
                <div
                    className={
                        'relative flex justify-center w-full h-20 select-none'
                    }>
                    <div className={'absolute w-4/5 aspect-square -top-28'}>
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
                <p className={'font-extrabold text-xl text-slate-800 font-exo'}>
                    {product.brand + ' ' + product.name}
                </p>
                <p className={'text-lg text-slate-700'}>${product.price}</p>
            </div>

            <div className={'flex flex-shrink w-full gap-x-4'}>
                <button
                    className={
                        'w-full h-14 border-black border-2 rounded-lg text-black font-light text-lg bg-white shadow-md productButton font-quicksand'
                    }
                    onClick={() => {
                        dispatch(addItem({ ...product }));
                    }}>
                    Add to Cart
                </button>
                <MoreButton />
            </div>
        </div>
    );
}

export default ProductCard;
