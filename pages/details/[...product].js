import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import getProductParams from '../../components/productParams';
import Details from '../../components/detailsPage/Details';
import {
    addProductToCart,
    addProductToCompare,
} from '../../components/productActions';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';

function Product() {
    const router = useRouter();
    const { product } = router.query;

    const dispatch = useDispatch();
    const { data: session } = useSession();

    const fetcher = url => axios.get(url).then(res => res.data);
    const { data } = useSWR(
        `/api/details/${product && product[0]}/${product && product[1]}`,
        fetcher
    );

    return (
        <>
            <Head>
                <title>{data ? data.brand + ' ' + data.name : 'Loading'}</title>
                <meta name="theme-color" content="#f5f5f4" />
            </Head>
            <div
                className={
                    'grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 detailed-bg md:h-screen w-screen box-border px-6 md:px-12 pb-6 md:pb-12 pt-24 relative gap-8'
                }>
                {data && (
                    <>
                        <div
                            className={
                                'flex justify-center items-center h-full md:col-span-2 p-6'
                            }>
                            <div
                                className={
                                    'relative h-4/5 md:hover:h-full duration-200 aspect-square'
                                }>
                                <Image
                                    src={data.link}
                                    layout={'fill'}
                                    quality={100}
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col justify-between'}>
                            <Details
                                product={getProductParams(
                                    data.productType,
                                    data
                                )}
                            />
                            <div
                                className={
                                    'grid grid-cols-4 gap-4 w-full my-4 px-6'
                                }>
                                <button
                                    className={
                                        'col-span-2 text-2xl pr-2 border-stone-300 border-r'
                                    }
                                    onClick={() =>
                                        addProductToCart(
                                            session,
                                            data,
                                            dispatch
                                        )
                                    }
                                    title={'Add to cart'}>
                                    ADD TO CART
                                </button>
                                <button
                                    className={
                                        'flex justify-center items-center col-span-1 pr-2 border-stone-300 border-r'
                                    }
                                    onClick={() =>
                                        addProductToCompare(data, dispatch)
                                    }
                                    title={'Add to compare'}>
                                    <CompareArrowsOutlinedIcon
                                        className={'text-4xl text-slate-900'}
                                    />
                                </button>
                                <button
                                    className={
                                        'flex justify-center items-center col-span-1'
                                    }
                                    title={'Add to PC Builder'}>
                                    <DesktopWindowsOutlinedIcon
                                        className={
                                            'text-4xl text-slate-900 opacity-25'
                                        }
                                    />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Product;
