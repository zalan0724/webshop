import React from 'react';
import Link from 'next/link';

function Slide({ bgVariant, mainText, subText, textWidth, link }) {
    return (
        <div className={bgVariant} id={bgVariant}>
            <div className={textWidth}>
                <p className={'text-6xl md:text-8xl font-bold text-shadow'}>
                    {mainText}
                </p>
                <p className={'text-2xl md:text-5xl md:font-light text-shadow'}>
                    {subText}
                </p>
            </div>
            <Link href={link}>
                <button
                    className={
                        'text-3xl border-white border-2 w-56 h-16 text-center hover:bg-white hover:text-black hover:font-bold duration-200 ease-out'
                    }>
                    Purchase Now
                </button>
            </Link>
        </div>
    );
}

export default Slide;
