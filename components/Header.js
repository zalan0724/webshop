import React from 'react';
import Image from "next/image";
import {MenuIcon, ShoppingCartIcon} from "@heroicons/react/outline";

function Header({handleMenu}) {
    return (
        <div className={"flex items-center h-20 w-screen fixed px-6 md:px-12 justify-between bg-gradient-to-b from-black to-transparent z-10"}>
            <div className={"flex items-center justify-start h-full space-x-2 relative"}>
                <div>
                    <MenuIcon className={"relative h-10 w-10 text-white cursor-pointer navButton"} onClick={handleMenu}/>
                </div>
                <div className={'relative h-96 w-96 hidden md:flex'}>
                    <Image
                        src={'https://firebasestorage.googleapis.com/v0/b/pc-webshop.appspot.com/o/logo.svg?alt=media&token=8fcb034a-13f1-480c-8c70-b0e18efb08d9'}
                        layout={'fill'}
                        className={'cursor-pointer'}
                    />
                </div>
            </div>
            <div className={'relative flex justify-end items-center space-x-2'}>
                <ShoppingCartIcon className={'relative h-10 w-10 text-white stroke-1 cursor-pointer stroke-1 navButton'}/>
            </div>
        </div>
    );
}

export default Header;