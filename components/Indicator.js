import React from 'react';

function Indicator({ number }) {
    return (
        <div
            className={
                'absolute flex items-center text-center justify-center w-5 aspect-square text-white bg-black rounded-full text-md -top-2 -right-3 z-11 leading-none animate-pulse'
            }>
            {number}
        </div>
    );
}

export default Indicator;
