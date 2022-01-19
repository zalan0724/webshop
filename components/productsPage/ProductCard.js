import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import { addProductToCart, addProductToCompare } from '../productActions';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const { data: session } = useSession();

    return (
        <div
            className={
                'flex transition-all ease-out bg-stone-100 hover:bg-gradient-to-tr hover:from-stone-200 hover:via-stone-200 hover:to-stone-300 hover:shadow-lg rounded-lg w-full h-40 xl:h-60 p-4 gap-x-4 box-border'
            }>
            <Link href={`/details/${product.productType}/${product.id}`}>
                <div
                    className={
                        'relative h-full aspect-square relative bg-stone-200 p-2 box-border cursor-pointer rounded-lg'
                    }>
                    <div className={'w-full h-full relative'}>
                        <Image
                            src={product.link}
                            layout={'fill'}
                            priority={true}
                            quality={10}
                        />
                    </div>
                </div>
            </Link>
            <div className={'flex flex-col justify-between w-full'}>
                <Link href={`/details/${product.productType}/${product.id}`}>
                    <div className={'cursor-pointer h-full'}>
                        <p className={'text-2xl font-exo'}>
                            {product.brand.toUpperCase()}
                        </p>
                        <p className={'text-xl font-exo'}>{product.name}</p>
                        <p className={'text-lg font-exo text-slate-600'}>
                            {'$' + product.price}
                        </p>
                    </div>
                </Link>
                <div
                    className={
                        'hidden lg:flex flex-row w-full justify-start gap-x-2 items-center'
                    }>
                    <button
                        className={
                            'flex justify-center items-center h-10 text-md xl:text-xl pr-2 text-slate-900 border-stone-300 xl:border-r'
                        }
                        title={'Add to cart'}
                        onClick={() =>
                            addProductToCart(session, product, dispatch)
                        }>
                        ADD TO CART
                    </button>
                    <button
                        className={
                            'hidden xl:flex items-center justify-center h-10 aspect-square pr-2 border-stone-300 border-r '
                        }
                        title={'Add to compare'}
                        onClick={() => addProductToCompare(product, dispatch)}>
                        <CompareArrowsOutlinedIcon
                            className={'text-3xl text-slate-900'}
                        />
                    </button>
                    <button
                        className={
                            'relative hidden xl:flex items-center justify-center h-10 aspect-square'
                        }
                        title={'Add to PC Builder'}>
                        <DesktopWindowsOutlinedIcon
                            className={'text-3xl text-slate-900 opacity-25'}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
