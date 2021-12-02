import React from 'react';
import Slide from "./Slide";

const getSlides = () =>{
    return [
        <Slide bgVariant={'slideOne'} mainText={'UNLEASH THE BEAST'} subText={'Check the newest RTX 30 Series GPUs'} textWidth={'md:w-3/4'} key={1}/>,
        <Slide bgVariant={'slideTwo'} mainText={'BREAK ALL LIMITS'} subText={'Radeon™ RX 6600 XT Series is available now'} textWidth={'md:w-1/2'} key={2}/>,
        <Slide bgVariant={'slideThree'} mainText={'THE ULTIMATE MONSTER'} subText={'Check the newest RTX 30 Series GPUs'} textWidth={'md:w-3/4'} key={3}/>]
}


export default function MainSlider() {

    return (
        <div className={'flex flex-col h-screen max-w-screen relative overflow-x-hidden overflow-y-auto scroll-snap-y scrollbar-thin scrollbar-thumb-white'}>
            {getSlides().map(slide => slide)}
        </div>
    );
}