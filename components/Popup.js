import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Popup({ message }) {
    const popupAnimation = {
        hidden: {
            y: '100%',
        },
        visible: {
            y: 0,
        },
    };

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto';
        };
    });

    return (
        <motion.div
            className={
                'flex justify-center items-center absolute justify-self-center bg-transparent bottom-0 h-20 p-4 w-screen z-10'
            }
            variants={popupAnimation}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div
                className={
                    'flex justify-center items-center w-full md:w-96 bg-white rounded-full p-2 m-2 md:shadow-lg border box-border border-gray-100'
                }>
                {message}
            </div>
        </motion.div>
    );
}

export default Popup;
