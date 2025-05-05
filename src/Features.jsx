import React from 'react';
import layout from "./assets/Layouts.svg";
import blur from "./assets/Blur 7.png";
import curve from "./assets/curve.svg";

const Features = () => {
    return (
        <div className='bg-black justify-center relative flex gap-2 flex-col sm:w-[750px] h-screen'>
            <img className='absolute sm:top-[50%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={curve} alt="" />
            <img className='absolute sm:top-[50%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={blur} alt="" />
            <hr className="h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="self-stretch text-white/80 text-center text-2xl font-normal font-inter">3 hours of video</div>
            <h2 className="self-stretch text-white/80 text-center justify-start sm:text-5xl text-4xl font-medium font-['Inter']">Quick and beautiful web design: Streamlining your creative process</h2>
            <img className='z-20' src={layout} alt="" />
        </div>
    )
}

export default Features;