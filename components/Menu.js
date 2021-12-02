import React from 'react';
import {XIcon} from "@heroicons/react/outline";

const getProducts = () => {
    return ['Cases', 'Motherboards', 'Graphics cards', 'Processors', 'Memories', 'Power Supplies']
}

export default function Menu({open = true | false, handleMenu}) {

    return (
        <div className={`${open ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4 fixed h-screen w-screen z-20 top-0 left-0`}>
            <div
                className={`flex flex-col justify-center items-center md:items-start w-full h-screen bg-black p-12 relative text-white `}>
                <ul className={'flex h-full w-full justify-start flex-col items-center md:items-start text-2xl font-bold space-y-8'}>
                    {getProducts().map((product, index) => {
                        return <li className={'cursor-pointer navButton'} key={index}>{product}</li>
                    })}
                </ul>
                <p className={'text-3xl cursor-pointer'}>LOGIN</p>
                <XIcon className={'absolute top-12 right-12 h-10 w-10 navButton cursor-pointer'} onClick={handleMenu}/>
            </div>
            <div className={'h-screen w-full hidden md:flex col-span-3'} onClick={handleMenu}/>
        </div>
    );
}