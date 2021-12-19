import React, { useState } from 'react';
import Slide from './Slide';

const Slides = [
    <Slide
        bgVariant={'slideOne'}
        mainText={'UNLEASH THE BEAST'}
        subText={'Check the newest RTX 30 Series GPUs'}
        textWidth={'md:w-3/4'}
        key={1}
    />,
    <Slide
        bgVariant={'slideTwo'}
        mainText={'BREAK ALL LIMITS'}
        subText={'Radeon™ RX 6600 XT Series is available now'}
        textWidth={'md:w-1/2'}
        key={2}
    />,
    <Slide
        bgVariant={'slideThree'}
        mainText={'THE ULTIMATE MONSTER'}
        subText={'Check the newest RTX 30 Series GPUs'}
        textWidth={'md:w-3/4'}
        key={3}
    />,
];

export default function MainSlider() {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

    const handleScroll = deltaY => {
        if (deltaY > 0) {
            const number = (currentSlideNumber + 1) % 3;
            setCurrentSlideNumber(number);
        } else if (deltaY < 0) {
            const number =
                currentSlideNumber === 0 ? 2 : (currentSlideNumber - 1) % 3;
            setCurrentSlideNumber(number);
        }
    };

    return (
        <div className={'flex flex-col absolute w-screen h-screen'}>
            {Slides[0]}
        </div>
    );
}
