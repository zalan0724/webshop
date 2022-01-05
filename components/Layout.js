import React, { useEffect, useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './cart/Cart';
import { motion, AnimatePresence } from 'framer-motion';
import Popup from './Popup';
import { useDispatch, useSelector } from 'react-redux';
import { getPopupMessage } from '../features/popup/popupSlice';
import { fetchCart } from '../features/cart/cartItemsSlice';
import { useSession } from 'next-auth/react';

function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const message = useSelector(getPopupMessage);

    const { data: session } = useSession();
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (!popupOpen && message.messageCount !== 0) {
            setPopupOpen(true);
            setTimeout(() => setPopupOpen(false), 4000);
        }
    }, [message.messageCount]);

    useEffect(() => {
        if (session) {
            dispatch(fetchCart({ userId: session.user.id }));
        }
    }, [session]);

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
            <AnimatePresence>
                {popupOpen && <Popup message={message.message} />}
            </AnimatePresence>
            {children}
        </>
    );
}

export default Layout;
