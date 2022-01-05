import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import getProductParams from '../../components/productParams';
import Details from '../../components/detailsPage/Details';

function Product() {
    const router = useRouter();
    const { product } = router.query;

    const fetcher = url => axios.get(url).then(res => res.data);
    const { data, error } = useSWR(
        `/api/details/${product && product[0]}/${product && product[1]}`,
        fetcher
    );

    return (
        <div
            className={
                'grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 bg-gray-100 md:h-screen w-screen box-border px-6 md:px-12 pb-6 md:pb-12 pt-24 relative gap-8'
            }>
            {data && (
                <>
                    <div
                        className={
                            'flex justify-center items-center h-ful md:col-span-2 p-6'
                        }>
                        <div
                            className={
                                'relative h-4/5 hover:h-full duration-200 aspect-square'
                            }>
                            <Image
                                src={data.link}
                                layout={'fill'}
                                quality={100}
                                priority={true}
                            />
                        </div>
                    </div>
                    <Details
                        product={getProductParams(data.productType, data)}
                    />
                </>
            )}
        </div>
    );
}

export default Product;
