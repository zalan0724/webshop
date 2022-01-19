import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import { useSession, signOut } from 'next-auth/react';

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
    const { data: session } = useSession();

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
                    <div className={'navButton'}>
                        <ArrowBackIosNewOutlinedIcon
                            className={'text-3xl cursor-pointer'}
                            onClick={closeMenu}
                        />
                    </div>
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
                        const available = !['Power Supplies'].includes(product);

                        return (
                            <Link
                                href={
                                    available
                                        ? `/products/${product
                                              .replace(' ', '')
                                              .toLowerCase()}`
                                        : ''
                                }
                                key={uuid()}>
                                <li
                                    className={`md:ml-8 font-exo font-light ${
                                        !available
                                            ? 'opacity-25'
                                            : 'navButton cursor-pointer'
                                    }`}
                                    onClick={closeMenu}>
                                    {product}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
                {session ? (
                    <div className={'flex items-center justify-between w-full'}>
                        <div className={'flex gap-x-2'}>
                            <div
                                className={
                                    'relative aspect-square w-8 rounded-full'
                                }>
                                <Image
                                    src={session.user.image}
                                    layout={'fill'}
                                    priority={true}
                                    className={'rounded-full'}
                                />
                            </div>
                            <p className={'text-2xl font-light font-exo'}>
                                {session.user.name}
                            </p>
                        </div>
                        <div className={'navButton'}>
                            <LogoutIcon
                                className={'text-white text-4xl cursor-pointer'}
                                onClick={() => signOut()}
                            />
                        </div>
                    </div>
                ) : (
                    <Link href={'/auth/signin'}>
                        <p
                            className={
                                'text-4xl font-light cursor-pointer font-exo'
                            }
                            onClick={closeMenu}>
                            LOGIN
                        </p>
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
