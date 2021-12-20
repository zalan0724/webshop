import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { v4 as uuid } from 'uuid';
import { getProducts } from '../../features/cart/cartItemSlice';
import { motion } from 'framer-motion';

export default function Cart({ closeCart }) {
    const cartItems = useSelector(getProducts);

    const cartAnimation = {
        hidden: {
            x: '100%',
        },
        visible: {
            x: '0',
        },
    };

    return (
        <motion.div
            className={
                'fixed top-0 right-0 z-30 w-screen md:w-1/2 xl:w-1/3 h-screen'
            }
            variants={cartAnimation}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div
                className={
                    'flex flex-col justify-between box-border items-center md:items-start w-full h-screen bg-gray-50 p-8 relative border-2 border-gray-100'
                }>
                <div
                    className={
                        'flex flex-col justify-start align-start h-full w-full'
                    }>
                    <div
                        className={
                            'flex justify-between w-full items-center pb-2 border-b-2 border-b-black'
                        }>
                        <p className={'text-black text-4xl font-bold'}>Cart</p>
                        <ChevronDoubleRightIcon
                            className={
                                'h-10 w-10 text-black navButton cursor-pointer'
                            }
                            onClick={closeCart}
                        />
                    </div>
                    <ul
                        className={
                            'flex h-full w-full flex-col justify-start items-start overflow-y-auto p-2 gap-2 duration-500'
                        }>
                        {cartItems?.map((product, index) => (
                            <CartItem
                                product={{ index, ...product }}
                                key={uuid()}
                            />
                        ))}
                    </ul>
                </div>
                <div
                    className={
                        'flex justify-between border-t-2 border-black w-full text-black pt-2'
                    }>
                    <p className={'text-2xl'}>
                        $
                        {cartItems
                            .map(product => product.price)
                            .reduce((a, b) => a + b, 0)}
                    </p>
                    <button
                        className={
                            'text-3xl font-bold hover:scale-110 duration-200 ease-out'
                        }>
                        Purchase
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
