import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { closeCart } from '../../features/cart/cartMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
    const cartItems = useSelector(state => state.cartItems.value);
    const dispatch = useDispatch();

    return (
        <div
            className={
                'fixed w-screen h-screen bg-black bg-opacity-20 top-0 left-0 z-20'
            }>
            <div
                className={
                    'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 absolute h-screen w-screen z-20 top-0 left-0'
                }>
                <div
                    className={
                        'h-screen w-full hidden md:flex md:col-span-2 lg:col-span-3'
                    }
                    onClick={() => dispatch(closeCart())}
                />
                <div
                    className={
                        'flex flex-col justify-between items-center md:items-start w-full h-screen bg-gray-50 p-8 relative text-white'
                    }>
                    <div
                        className={
                            'flex flex-col justify-start align-start h-full w-full'
                        }>
                        <div
                            className={
                                'flex justify-between w-full items-center pb-2 border-b-2 border-b-black'
                            }>
                            <p className={'text-black text-4xl font-bold'}>
                                Cart
                            </p>
                            <ChevronDoubleRightIcon
                                className={
                                    'h-10 w-10 text-black navButton cursor-pointer'
                                }
                                onClick={() => dispatch(closeCart())}
                            />
                        </div>
                        <ul
                            className={
                                'flex h-full w-full flex-col justify-start items-start overflow-y-auto p-2 gap-2'
                            }>
                            {cartItems?.map((product, index) => (
                                <CartItem
                                    product={{ index, ...product }}
                                    key={index}
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
            </div>
        </div>
    );
}
