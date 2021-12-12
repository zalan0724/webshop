import React from 'react';
import {XIcon} from "@heroicons/react/outline";
import {closeCart} from '../features/cart/cartMenuSlice'
import {useDispatch} from "react-redux";

export default function Cart({cartItems}) {

    const dispatch = useDispatch()

    return (
        <div className={'fixed w-screen h-screen bg-black bg-opacity-20 top-0 left-0 z-20'}>
            <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 absolute h-screen w-screen z-20 top-0 left-0'}>
                <div className={'h-screen w-full hidden md:flex md:col-span-2 lg:col-span-3'}
                     onClick={() => dispatch(closeCart())}/>
                <div
                    className={'flex flex-col justify-between items-center md:items-start w-full h-screen bg-white p-12 relative text-white'}>
                    <div className={'flex justify-between w-full items-center'}>
                        <p className={'text-black text-4xl font-bold'}>Cart</p>
                        <XIcon className={'h-10 w-10 text-black navButton cursor-pointer'}
                               onClick={() => dispatch(closeCart())}/>
                    </div>
                    <ul className={'flex h-full w-full flex-col justify-start items-center overflow-y-auto'}>
                        {cartItems?.map(product => (<li>{product}</li>))}
                    </ul>
                    <div className={'flex justify-between border-t-2 border-black w-full text-black pt-2'}>
                        <p className={'text-2xl'}>$5664</p>
                        <button className={'text-3xl font-bold hover:scale-110 duration-200 ease-out'}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
}