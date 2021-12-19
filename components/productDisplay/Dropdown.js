import React from 'react';

function Dropdown() {
    return (
        <div
            className={
                'flex items-center justify-start bg-white shadow-lg rounded-lg p-2 absolute z-60'
            }>
            <ul className={'w-full h-full font-quicksand text-slate-700'}>
                <li className={'border-b border-gray-300'}>Details</li>
                <li className={'border-b border-gray-300'}>Add to Cart</li>
                <li>Add to Compare</li>
            </ul>
        </div>
    );
}

export default Dropdown;
