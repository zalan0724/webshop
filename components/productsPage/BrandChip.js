import React from 'react';

function BrandChip({ checked, brand, handleCheckChange }) {
    const handleClick = () => {
        handleCheckChange(!checked, brand);
    };

    return (
        <div
            className={`flex p-1 box-border border rounded-lg text-black cursor-pointer hover:scale-110 duration-200 ${
                checked
                    ? 'bg-slate-900 border-slate-900'
                    : 'bg-stone-200 hover:bg-stone-200 hover:border-stone-200'
            }`}
            onClick={handleClick}>
            <span
                className={`select-none font-exo ${
                    checked ? 'text-white' : 'text-black'
                }`}>
                {brand}
            </span>
        </div>
    );
}

export default BrandChip;
