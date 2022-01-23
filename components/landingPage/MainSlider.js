import React, { useState } from 'react';
import Slide from './Slide';
import { v4 as uuid } from 'uuid';

const Slides = [
    <Slide
        bgVariant={'slideOne'}
        mainText={'UNLEASH THE BEAST'}
        subText={'Check the newest RTX 30 Series GPUs'}
        textWidth={'md:w-3/4'}
        link={'/products/graphicscards'}
        key={uuid()}
    />,
    <Slide
        bgVariant={'slideTwo'}
        mainText={'BREAK ALL LIMITS'}
        subText={'Radeon™ RX 6600 XT Series is available now'}
        textWidth={'md:w-1/2'}
        link={'/products/graphicscards'}
        key={uuid()}
    />,
    <Slide
        bgVariant={'slideThree'}
        mainText={'THE ULTIMATE MONSTER'}
        subText={'The newest motherboards are ready to win'}
        textWidth={'md:w-3/4'}
        link={'/products/motherboards'}
        key={uuid()}
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
