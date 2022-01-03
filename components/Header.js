import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    MenuIcon,
    ScaleIcon,
    ShoppingCartIcon,
    DesktopComputerIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import logo_white from '../assets/logo_white.svg';
import logo_black from '../assets/logo_black.svg';
import { getCartLength } from '../features/cart/cartItemSlice';
import Indicator from './Indicator';
import { getComparedItemsLength } from '../features/compare/comparedItemsSlice';

function Header({ openMenu, openCart }) {
    const router = useRouter();

    const cartLength = useSelector(getCartLength);
    const comparedLength = useSelector(getComparedItemsLength);

    return (
        <div className={router.pathname === '/' ? 'mainHeader' : 'whiteHeader'}>
            <div
                className={
                    'flex items-center justify-start h-full space-x-8 relative'
                }>
                <div>
                    <MenuIcon
                        className={`relative h-10 w-10 ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } cursor-pointer navButton`}
                        onClick={() => {
                            openMenu(true);
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
                            alt={'PC Components'}
                            priority={true}
                        />
                    </div>
                </Link>
            </div>
            <div className={'relative flex justify-end items-center space-x-8'}>
                <div className={'relative flex justify-end items-center'}>
                    <DesktopComputerIcon
                        className={`relative h-10 w-10 ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } stroke-1 cursor-pointer stroke-1 navButton`}
                    />
                </div>
                <Link href={'/compare'}>
                    <div className={'relative flex justify-end items-center'}>
                        <ScaleIcon
                            className={`relative h-10 w-10 ${
                                router.pathname === '/'
                                    ? 'text-white'
                                    : 'text-black'
                            } stroke-1 cursor-pointer stroke-1 navButton`}
                        />
                        {comparedLength > 0 && (
                            <Indicator number={comparedLength} />
                        )}
                    </div>
                </Link>
                <div className={'relative flex justify-end items-center'}>
                    <ShoppingCartIcon
                        className={`relative h-10 w-10 ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } stroke-1 cursor-pointer stroke-1 navButton`}
                        onClick={() => {
                            openCart(true);
                        }}
                    />
                    {cartLength > 0 && <Indicator number={cartLength} />}
                </div>
            </div>
        </div>
    );
}

export default Header;
