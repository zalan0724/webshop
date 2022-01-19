import React, from 'react';
import { motion } from 'framer-motion';

function Popup({ message }) {
    const popupAnimation = {
        hidden: {
            bottom: '-10%',
        },
        visible: {
            bottom: 0,
        },
    };

    return (
        <motion.div
            className={
                'flex justify-center items-center fixed justify-self-center bg-transparent -bottom-20 h-20 p-4 w-screen z-10'
            }
            variants={popupAnimation}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div
                className={
                    'flex justify-center items-center w-full md:w-96 bg-stone-100 rounded-full p-2 m-2 md:shadow-lg border box-border border-stone-200'
                }>
                {message}
            </div>
        </motion.div>
    );
}

export default Popup;
