import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

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
                'grid grid-cols-3 bg-gray-100 h-screen w-screen box-border px-6 md:px-12 pb-6 md:pb-12 pt-24 relative gap-8'
            }>
            {data && (
                <>
                    <div
                        className={
                            'flex justify-center items-center h-ful col-span-2 p-6'
                        }>
                        <div
                            className={
                                'relative h-4/5 hover:h-full duration-200  aspect-square'
                            }>
                            <Image
                                src={data.Link}
                                layout={'fill'}
                                quality={100}
                                priority={true}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            'bg-white relative col-span-1 shadow-lg rounded-2xl font-quicksand text-2xl p-6'
                        }>
                        <p className={'font-exo font-bold text-4xl mb-8'}>
                            {data.Name}
                        </p>
                        <div className={'relative'}>
                            {Object.keys(data)
                                .filter(
                                    key => !['Link', 'id', 'Name'].includes(key)
                                )
                                .map(param => (
                                    <p key={uuid()} className={'my-4 ml-4'}>
                                        <span
                                            className={
                                                'text-slate-800 font-thin'
                                            }>
                                            {param}:{' '}
                                        </span>
                                        <span
                                            className={
                                                'text-slate-900 font-bold'
                                            }>
                                            {data[param]}
                                        </span>
                                    </p>
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Product;
