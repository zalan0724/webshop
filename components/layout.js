import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './cart/Cart';
import { useSelector } from 'react-redux';

function Layout({ children }) {
    const openMenu = useSelector(state => state?.menu.value);
    const openCart = useSelector(state => state?.cart.value);

    return (
        <>
            <Header />
            {openMenu && <Menu />}
            {openCart && <Cart />}
            <main>{children}</main>
        </>
    );
}

export default Layout;
