import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './cart/Cart';
import { motion, AnimatePresence } from 'framer-motion';

function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const backDrop = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 0.25,
        },
    };

    const closeSides = () => {
        setCartOpen(false);
        setMenuOpen(false);
    };

    return (
        <>
            <Header openMenu={setMenuOpen} openCart={setCartOpen} />
            <AnimatePresence>
                {(menuOpen || cartOpen) && (
                    <motion.div
                        className={'fixed top-0 z-20'}
                        variants={backDrop}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'hidden'}
                        transition={{ duration: 0.3, ease: 'easeOut' }}>
                        <div
                            className={'w-screen h-screen bg-black'}
                            onClick={closeSides}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {menuOpen && <Menu closeMenu={closeSides} />}
            </AnimatePresence>
            <AnimatePresence>
                {cartOpen && <Cart closeCart={closeSides} />}
            </AnimatePresence>
            {children}
        </>
    );
}

export default Layout;
