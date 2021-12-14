import React from 'react';
import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cart/cartItemSlice';

function CartItem({ product }) {
    const dispatch = useDispatch();

    return (
        <li
            className={
                'flex h-24 w-full shadow-lg justify-between items-center p-2'
            }>
            <div
                className={
                    'flex h-full w-full justify-start items-center gap-2'
                }>
                <div className={'relative h-full aspect-square'}>
                    <Image
                        src={product.link}
                        layout={'fill'}
                        priority={false}
                    />
                </div>
                <div className={'flex flex-col justify-center items-start'}>
                    <p className={'font-bold text-black text-lg'}>
                        {product.name}
                    </p>
                    <p className={' text-black text-lg'}>${product.price}</p>
                </div>
            </div>
            <button onClick={() => dispatch(removeItem(product.index))}>
                <XIcon className={'text-black h-8 w-8 navButton'} />
            </button>
        </li>
    );
}

export default CartItem;
