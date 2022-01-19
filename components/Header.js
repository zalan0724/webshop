import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import logo_white from '../assets/logo_white.svg';
import logo_black from '../assets/logo_black.svg';
import { getCartLength } from '../features/cart/cartItemsSlice';
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
                <div title={'Menu'} className={'navButton'}>
                    <MenuIcon
                        className={`relative text-4xl ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } cursor-pointer`}
                        onClick={() => {
                            openMenu(true);
                        }}
                    />
                </div>
                <Link href={'/'}>
                    <div
                        className={
                            'relative h-full w-96 hidden md:flex cursor-pointer'
                        }
                        title={'PC Component Home'}>
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
                <div
                    className={
                        'relative flex justify-end items-center navButton'
                    }
                    title={'PC Builder'}>
                    <DesktopWindowsOutlinedIcon
                        className={`relative text-4xl opacity-25 ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } cursor-pointer`}
                    />
                </div>
                <Link href={'/compare'}>
                    <div
                        className={
                            'relative flex justify-end items-center navButton'
                        }
                        title={'Compare products'}>
                        <CompareArrowsOutlinedIcon
                            className={`relative text-4xl ${
                                router.pathname === '/'
                                    ? 'text-white'
                                    : 'text-black'
                            } cursor-pointer`}
                        />
                        {comparedLength > 0 && (
                            <Indicator number={comparedLength} />
                        )}
                    </div>
                </Link>
                <div
                    className={
                        'relative flex justify-end items-center navButton'
                    }
                    title={'Cart'}>
                    <ShoppingCartOutlinedIcon
                        className={`relative text-4xl ${
                            router.pathname === '/'
                                ? 'text-white'
                                : 'text-black'
                        } cursor-pointer`}
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
