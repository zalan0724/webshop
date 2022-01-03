import React from 'react';

function BrandChip({ checked, brand, handleCheckChange }) {
    const handleClick = () => {
        handleCheckChange(!checked, brand);
    };

    return (
        <div
            className={`flex p-1 border-black border-2 rounded-lg text-black cursor-pointer hover:scale-110 duration-200 ${
                checked
                    ? 'bg-gray-900 border-black'
                    : 'bg-white hover:bg-gray-200'
            }`}
            onClick={handleClick}>
            <span
                className={`select-none ${
                    checked ? 'text-white' : 'text-black'
                }`}>
                {brand}
            </span>
        </div>
    );
}

export default BrandChip;
