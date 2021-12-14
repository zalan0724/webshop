import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../features/menu/menuSlice';

const getProducts = () => {
    return [
        'Cases',
        'Motherboards',
        'Graphics Cards',
        'Processors',
        'Memories',
        'Power Supplies',
    ];
};

export default function Menu() {
    const dispatch = useDispatch();

    return (
        <div
            className={
                'fixed w-screen h-screen bg-black bg-opacity-20 top-0 left-0 z-20'
            }>
            <div
                className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 absolute h-screen w-screen top-0 left-0`}>
                <div
                    className={`flex flex-col justify-center items-center md:items-start h-screen w-full bg-black p-12 relative text-white `}>
                    <div
                        className={
                            'flex relative w-full justify-end items-center'
                        }>
                        <XIcon
                            className={'h-10 w-10 navButton cursor-pointer'}
                            onClick={() => dispatch(closeMenu())}
                        />
                    </div>
                    <ul
                        className={
                            'flex w-full h-full justify-start flex-col items-center md:items-start text-2xl font-bold space-y-8'
                        }>
                        <Link href={'/'}>
                            <li
                                className={'cursor-pointer navButton'}
                                onClick={() => dispatch(closeMenu())}>
                                Home
                            </li>
                        </Link>
                        <Link href={'/allproducts'}>
                            <li
                                className={'cursor-pointer navButton'}
                                onClick={() => dispatch(closeMenu())}>
                                All Products
                            </li>
                        </Link>
                        {getProducts().map((product, index) => {
                            return (
                                <Link
                                    href={`/products/${product
                                        .replace(' ', '')
                                        .toLowerCase()}`}
                                    key={index}>
                                    <li
                                        className={
                                            'navButton ml-8 cursor-pointer'
                                        }
                                        onClick={() => dispatch(closeMenu())}>
                                        {product}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                    <p className={'text-4xl font-light cursor-pointer'}>
                        LOGIN
                    </p>
                </div>
                <div
                    className={
                        'h-screen w-full md:flex hidden md:col-span-1 xl:col-span-2 2xl:col-span-3 shadow-md'
                    }
                    onClick={() => dispatch(closeMenu())}
                />
            </div>
        </div>
    );
}
