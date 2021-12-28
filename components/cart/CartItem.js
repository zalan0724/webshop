import React from 'react';
import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProducts,
    removeFromCart,
    setCart,
} from '../../features/cart/cartItemSlice';
import { useSession } from 'next-auth/react';
import axios from 'axios';

function CartItem({ product }) {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const cart = useSelector(getProducts);

    const removeItemFromCart = async index => {
        if (session) {
            const oldCart = [...cart];
            oldCart.splice(index, 1);
            const cloudData = await axios.put(`/api/user/${session.user.id}`, {
                cart: oldCart,
            });
            dispatch(setCart(cloudData.data.cart));
        } else {
            dispatch(removeFromCart(index));
        }
    };

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
                        priority={true}
                        quality={1}
                    />
                </div>
                <div className={'flex flex-col justify-center items-start'}>
                    <p className={'font-bold text-black text-lg'}>
                        {product.brand + ' ' + product.name}
                    </p>
                    <p className={' text-black text-lg'}>${product.price}</p>
                </div>
            </div>
            <button onClick={() => removeItemFromCart(product.index)}>
                <XIcon className={'text-black h-8 w-8 navButton'} />
            </button>
        </li>
    );
}

export default CartItem;
