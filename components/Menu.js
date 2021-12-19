import React from 'react';
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';

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

export default function Menu({ closeMenu }) {
    const menuAnimation = {
        hidden: {
            x: '-50%',
        },
        visible: {
            x: '0',
        },
    };

    return (
        <motion.div
            className={'fixed top-0 z-30'}
            variants={menuAnimation}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{
                duration: 0.3,
                ease: 'easeOut',
            }}>
            <div
                className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 relative h-screen w-screen`}>
                <div
                    className={`flex flex-col justify-center items-center md:items-start h-screen w-full bg-black p-12 relative text-white `}>
                    <div
                        className={
                            'flex relative w-full justify-end items-center'
                        }>
                        <ChevronDoubleLeftIcon
                            className={'h-10 w-10 navButton cursor-pointer'}
                            onClick={closeMenu}
                        />
                    </div>
                    <ul
                        className={
                            'flex w-full h-full justify-start flex-col items-center md:items-start text-2xl font-bold space-y-8'
                        }>
                        <Link href={'/'}>
                            <li
                                className={'cursor-pointer navButton'}
                                onClick={closeMenu}>
                                Home
                            </li>
                        </Link>
                        <Link href={'/products/allproducts'}>
                            <li
                                className={'cursor-pointer navButton'}
                                onClick={closeMenu}>
                                All Products
                            </li>
                        </Link>
                        {getProducts().map(product => {
                            return (
                                <Link
                                    href={`/products/${product
                                        .replace(' ', '')
                                        .toLowerCase()}`}
                                    key={uuid()}>
                                    <li
                                        className={
                                            'navButton md:ml-8 cursor-pointer'
                                        }
                                        onClick={closeMenu}>
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
                    onClick={closeMenu}
                />
            </div>
        </motion.div>
    );
}
