import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../features/menu/menuSlice';
import { openCart } from '../features/cart/cartMenuSlice';
import { useRouter } from 'next/router';
import logo_white from '../assets/logo_white.svg';
import logo_black from '../assets/logo_black.svg';

function Header() {
    const dispatch = useDispatch();
    const router = useRouter();

    const cartItems = useSelector(state => state.cartItems.value);

    return (
        <div className={router.pathname === '/' ? 'mainHeader' : 'whiteHeader'}>
            <div
                className={
                    'flex items-center justify-start h-full space-x-2 relative ab'
                }>
                <div>
                    <MenuIcon
                        className={`relative h-10 w-10 ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } cursor-pointer navButton`}
                        onClick={() => {
                            dispatch(openMenu());
                        }}
                    />
                </div>
                <Link href={'/'}>
                    <div
                        className={
                            'relative h-full w-96 hidden md:flex cursor-pointer'
                        }>
                        <Image
                            src={
                                router.pathname === '/'
                                    ? logo_white
                                    : logo_black
                            }
                            layout={'fill'}
                            priority={true}
                        />
                    </div>
                </Link>
            </div>
            <div className={'relative flex justify-end items-center space-x-2'}>
                <ShoppingCartIcon
                    className={`relative h-10 w-10 ${
                        router.pathname === '/' ? 'text-white' : 'text-black'
                    } stroke-1 cursor-pointer stroke-1 navButton`}
                    onClick={() => {
                        dispatch(openCart());
                    }}
                />
                {cartItems.length > 0 && (
                    <div
                        className={
                            'absolute flex item-center text-center justify-center h-4 w-4 text-white bg-black rounded-full text-md -top-2 -right-3 z-20 leading-none animate-pulse'
                        }>
                        {cartItems.length}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
