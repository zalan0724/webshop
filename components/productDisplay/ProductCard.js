import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    getProducts,
    setCart,
} from '../../features/cart/cartItemSlice';
import { addToCompare } from '../../features/compare/comparedItemsSlice';
import { addMessage } from '../../features/popup/popupSlice';
import { motion } from 'framer-motion';
import {
    ArrowDownIcon,
    InformationCircleIcon,
    ScaleIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import axios from 'axios';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const cart = useSelector(getProducts);

    const [more, setMore] = useState(false);

    const addItemToCart = async item => {
        if (session) {
            const cloudData = await axios.put(`/api/user/${session.user.id}`, {
                cart: [...cart, item],
            });
            dispatch(setCart(cloudData.data.cart));
        } else {
            dispatch(addToCart(item));
        }
        dispatch(addMessage('Item added to the cart'));
    };

    const addItemToCompare = item => {
        dispatch(addToCompare({ ...item }));
        dispatch(addMessage('Item added to compare'));
    };

    const arrowButtonAnimation = {
        down: {
            rotate: 0,
        },
        up: {
            rotate: 180,
        },
    };

    const moreButtonsAnimation = {
        addToCart: {
            top: 0,
        },
        more: {
            top: '-114%',
        },
    };

    return (
        <div
            className={
                'flex flex-col justify-between items-start w-64 h-80 bg-white relative p-4 shadow-lg rounded-2xl hover:shadow-2xl duration-200 cursor-pointer box-border mt-24 animate-hoverUp'
            }>
            <div className={'relative h-full w-full'}>
                <div
                    className={
                        'relative flex justify-center w-full h-20 select-none'
                    }>
                    <div className={'absolute w-4/5 aspect-square -top-28'}>
                        <div className={'relative h-full w-full'}>
                            <Image
                                src={product.link}
                                layout={'fill'}
                                quality={50}
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
                <p className={'font-extrabold text-xl text-slate-800 font-exo'}>
                    {product.brand + ' ' + product.name}
                </p>
                <p className={'text-lg text-slate-700'}>${product.price}</p>
            </div>

            <div className={'flex justify-end w-full h-14 gap-x-4 relative'}>
                <div
                    className={
                        'overflow-hidden relative w-full h-14 box-border'
                    }>
                    <motion.div
                        className={
                            'absolute flex flex-wrap h-16 box-border w-full'
                        }
                        variants={moreButtonsAnimation}
                        animate={more ? 'more' : 'addToCart'}
                        transition={{ duration: 0.2, ease: 'easeOut' }}>
                        <button
                            className={
                                'relative w-full h-14 border-black border-2 rounded-xl text-black font-light text-lg bg-white shadow-md duration-200 hover:bg-black hover:text-white font-quicksand mb-2'
                            }
                            onClick={async () => {
                                await addItemToCart({ ...product });
                            }}>
                            Add to Cart
                        </button>
                        <div
                            className={
                                'relative flex h-14 w-full justify-around'
                            }>
                            <button
                                className={
                                    'flex w-14 h-10 m-2 box-border rounded-lg bg-black productButton items-center justify-center'
                                }>
                                <InformationCircleIcon
                                    className={'h-3/5 text-white'}
                                />
                            </button>
                            <button
                                className={
                                    'flex w-14 h-10 m-2 box-border rounded-lg bg-black productButton items-center justify-center'
                                }
                                onClick={() => {
                                    addItemToCompare({ ...product });
                                }}>
                                <ScaleIcon className={'h-3/5 text-white'} />
                            </button>
                        </div>
                    </motion.div>
                </div>
                <motion.button
                    variants={arrowButtonAnimation}
                    animate={more ? 'up' : 'down'}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    className={
                        'h-full rounded-lg bg-white text-black font-light duration-200 hover:scale-110 relative'
                    }
                    onClick={() => setMore(!more)}>
                    <ArrowDownIcon className={'h-3/5'} />
                </motion.button>
            </div>
        </div>
    );
}

export default ProductCard;
