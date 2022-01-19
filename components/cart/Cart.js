import React from 'react';
import CartItem from './CartItem';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useSelector } from 'react-redux';
import { getCart } from '../../features/cart/cartItemsSlice';

export default function Cart({ closeCart }) {
    const cartItems = useSelector(getCart);

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
                'fixed top-0 right-0 z-40 w-screen md:w-1/2 xl:w-1/3 h-screen'
            }
            variants={cartAnimation}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div
                className={
                    'flex flex-col justify-between box-border items-center md:items-start w-full h-screen bg-stone-100 p-8 relative border-2 border-gray-100'
                }>
                <div
                    className={
                        'flex flex-col justify-start align-start h-full w-full'
                    }>
                    <div
                        className={
                            'flex justify-between w-full items-center pb-2 border-b-2 border-b-stone-300'
                        }>
                        <p className={'text-black text-4xl font-bold'}>Cart</p>
                        <div className={'navButton'}>
                            <ArrowBackIosNewOutlinedIcon
                                className={
                                    'text-3xl text-black rotate-180 cursor-pointer'
                                }
                                onClick={closeCart}
                            />
                        </div>
                    </div>
                    <ul
                        className={
                            'flex h-full w-full flex-col justify-start items-start overflow-y-auto p-2 gap-2 duration-500 scrollbar-thin scrollbar-rounded scrollbar-thumb-gray-700'
                        }>
                        {cartItems?.map((product, index) => (
                            <CartItem
                                product={{ index, ...product }}
                                key={uuid()}
                                closeCart={closeCart}
                            />
                        ))}
                    </ul>
                </div>
                <div
                    className={
                        'flex justify-between border-t-2 border-stone-300 w-full text-black pt-2'
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
