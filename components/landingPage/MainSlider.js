import React, { useState } from 'react';
import Slide from './Slide';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

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
    const [currentSlide, setCurrentSlide] = useState([Slides[0]]);

    const handleScroll = deltaY => {
        const number =
            currentSlideNumber + deltaY / 100 === -1
                ? 2
                : (currentSlideNumber + deltaY / 100) % 3;
        setCurrentSlideNumber(number);
        setCurrentSlide([Slides[number]]);
    };

    return (
        <div
            className={
                'flex flex-col h-screen w-screen bg-black overflow-hidden'
            }
            onWheel={event => handleScroll(event.deltaY)}>
            <TransitionGroup>
                {currentSlide.map(slide => (
                    <CSSTransition
                        key={uuid()}
                        timeout={500}
                        classNames={'slide'}>
                        {slide}
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <div className={'flex absolute gap-2 self-center bottom-0 mb-2'}>
                {[...Array(3).keys()].map(dot => (
                    <div
                        className={`inline-block h-3 w-3 border-2 border-white rounded-full ${
                            dot === currentSlideNumber && 'bg-white'
                        }`}
                        key={uuid()}
                    />
                ))}
            </div>
        </div>
    );
}
