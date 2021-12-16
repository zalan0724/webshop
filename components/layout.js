import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './cart/Cart';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

function Layout({ children }) {
    const openMenu = useSelector(state => state?.menu.value);
    const openCart = useSelector(state => state?.cart.value);

    return (
        <div className={'overflow-hidden'}>
            <Header />
            <CSSTransition
                in={openMenu || openCart}
                classNames={'bgBlack'}
                unmountOnExit
                timeout={400}>
                <div
                    className={
                        'w-screen h-screen absolute z-40 top-0 left-0 bg-black opacity-25'
                    }
                />
            </CSSTransition>
            <CSSTransition
                in={openMenu}
                classNames={'menu'}
                unmountOnExit
                timeout={400}>
                <Menu />
            </CSSTransition>
            <CSSTransition
                in={openCart}
                classNames={'cart'}
                unmountOnExit
                timeout={400}>
                <Cart />
            </CSSTransition>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
