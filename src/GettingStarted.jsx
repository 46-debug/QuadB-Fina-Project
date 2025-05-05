import React from 'react';
import blur from "./assets/Blur 6.png";
import StepsImage from "./assets/Flight UIImage.png";
import aero from "./assets/aero.svg";
import { Link } from 'react-router-dom';

const GettingStarted = () => {
    return (
        <div className={`flex flex-col sm:flex-row relative overflow-hidden sm:justify-between justify-center sm:pl-10 pl-3 items-center h-screen`}>
            <img className='absolute sm:top-[10%] top-[60%] sm:-right-[10%] right-[0%] sm:-translate-x-[0%] -translate-y-[50%]' src={blur} alt="" />
            <div>
                <div className="sm:w-[582px] w-[300px]"><span class="text-white sm:text-6xl text-4xl font-medium">Craft </span><span class="text-white/50 sm:text-6xl text-4xl font-medium">captivating websites with a canvas you already know</span></div>
                <div className="text-white/30 mt-10 sm:text-lg font-medium">Components</div>
                <div className="text-white/20">A collection of versatile components that can be tailored to fit the specific needs of your project, ensuring both aesthetic appeal and functionality.</div>
                <div className="text-white/30 mt-10 sm:text-lg font-medium">Glass, Outline, Flat styles</div>
                <div className="text-white/20">Choose from these diverse design styles to cater to different aesthetic preferences and project requirements.</div>
                <div className="text-white/30 mt-10 sm:text-lg font-medium">Templates and Sections</div>
                <div className="text-white/20">Streamline your design process with ready-to-use templates and sections, adaptable to various web projects.</div>
                <Link to="/tutorial">
                    <button className='px-7 flex text-white mt-10 py-3 rounded-[10px] border-[1px] border-[solid] border-[rgba(39,55,207,0.40)] bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_-40.91%,_#402788_132.95%)] [box-shadow:0px_10px_40px_0px_rgba(63,_74,_175,_0.50),_0px_10px_30px_0px_rgba(73,_123,_255,_0.70)_inset] backdrop-filter backdrop-blur-[10px] justify-center items-center gap-3'>
                        Get Started
                        <img src={aero} alt="" />
                    </button>
                </Link>
            </div>
            <img className='' src={StepsImage} alt="" />
        </div>
    )
}

export default GettingStarted;