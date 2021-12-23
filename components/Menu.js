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
            x: '-100%',
        },
        visible: {
            x: '0',
        },
    };

    return (
        <motion.div
            className={
                'fixed top-0 left-0 z-30 w-screen md:w-1/2 xl:w-1/3 h-screen'
            }
            variants={menuAnimation}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{
                duration: 0.3,
                ease: 'easeOut',
            }}>
            <div
                className={`flex flex-col justify-center items-center md:items-start h-screen w-full bg-black p-12 relative text-white `}>
                <div
                    className={'flex relative w-full justify-end items-center'}>
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
                            className={
                                'cursor-pointer navButton font-exo font-medium text-3xl'
                            }
                            onClick={closeMenu}>
                            Home
                        </li>
                    </Link>
                    <Link href={'/products/allproducts'}>
                        <li
                            className={
                                'cursor-pointer navButton font-exo font-medium text-3xl'
                            }
                            onClick={closeMenu}>
                            All products
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
                                        'navButton md:ml-8 cursor-pointer font-exo font-light'
                                    }
                                    onClick={closeMenu}>
                                    {product}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
                <p className={'text-4xl font-light cursor-pointer font-exo'}>
                    LOGIN
                </p>
            </div>
        </motion.div>
    );
}
