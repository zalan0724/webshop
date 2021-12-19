import React, { useState } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';

function MoreButton() {
    const [open, setOpen] = useState(false);

    return (
        <button
            className={
                'h-14 w-12 rounded-lg bg-white text-black font-light duration-200 hover:scale-110 relative'
            }
            onClick={() => setOpen(!open)}>
            <DotsVerticalIcon className={'h-2/3 text-4xl'} />
        </button>
    );
}

export default MoreButton;
