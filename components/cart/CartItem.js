import React from 'react';
import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../productActions';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function CartItem({ product, closeCart }) {
    const dispatch = useDispatch();
    const { data: session } = useSession();

    return (
        <li
            className={
                'flex h-24 w-full justify-between items-center p-2 transition-all ease-out bg-stone-100 hover:bg-gradient-to-tr hover:from-stone-200 hover:via-stone-200 hover:to-stone-300 hover:shadow-sm duration-200 rounded-lg'
            }>
            <Link href={`/details/${product.productType}/${product.id}`}>
                <div
                    className={
                        'flex h-full w-full justify-start items-center gap-2 cursor-pointer'
                    }
                    onClick={closeCart}>
                    <div
                        className={
                            'relative h-full aspect-square p-2 box-border bg-stone-200 rounded-lg'
                        }>
                        <div className={'relative w-full h-full'}>
                            <Image
                                src={product.link}
                                layout={'fill'}
                                priority={true}
                                quality={1}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            'flex flex-col justify-center items-start font-exo'
                        }>
                        <p className={'text-slate-900 font-semibold text-lg'}>
                            {product.brand + ' ' + product.name}
                        </p>
                        <p className={' text-black text-lg'}>
                            ${product.price}
                        </p>
                    </div>
                </div>
            </Link>
            <button
                onClick={() =>
                    removeItemFromCart(session, product.index, dispatch)
                }>
                <XIcon className={'text-black h-8 w-8 navButton'} />
            </button>
        </li>
    );
}

export default CartItem;
