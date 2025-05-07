import React from 'react'
import Header from './Header';
import blur from "../assets/Blur 6.png";
import aero from "../assets/aero.svg";
import dashboardImage from "../assets/dashboardImage.png";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex text-white flex-col justify-start bg-black items-center'>
            <Header />
            <img className='absolute sm:top-[70%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={blur} alt="" />
            <div className='flex mt-20 items-center gap-5 sm:p-0 px-3 justify-center sm:w-[510px] w-full flex-col'>
                <Link to="/gettingstarted">
                    <div className='flex px-4 py-1.5 bg-white/0 rounded-lg shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_22px_0px_rgba(255,255,255,0.10)] shadow-[inset_0px_0px_20px_0px_rgba(198,204,255,0.20)] shadow-[inset_0px_1px_3px_0px_rgba(199,220,255,0.35)] outline outline-1 outline-offset-[-1px] outline-white/0 backdrop-blur-[10px] items-center gap-2 w-52 justify-center'>New components <img src={aero} alt="" /></div>
                </Link>
                <div id='heading' className="self-stretch text-center justify-start text-white text-6xl font-medium font-['Inter']">Craft Stunning User Interfaces</div>
                <div className="self-stretch text-center">This UI kit is a perfect blend of modern design and practical usability, making it an ideal choice for a wide range of projects including web applications, mobile apps, and dashboard interfaces.</div>
                <Link to="/features">
                    <button className='flex px-4 py-2 bg-white/15 rounded-lg shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_22px_0px_rgba(255,255,255,0.10)] shadow-[inset_0px_0px_20px_0px_rgba(198,204,255,0.20)] shadow-[inset_0px_1px_3px_0px_rgba(199,220,255,0.35)] outline outline-1 outline-offset-[-1px] outline-white/0 backdrop-blur-[10px] items-center gap-2 w-52 justify-center'>
                        START FREE TRIAL
                        <img src={aero} alt="" />
                    </button>
                </Link>
            </div>

            <div className='bg-gradient-to-b from-black/0 to-black/60 rounded-3xl'>
                <img src={dashboardImage} alt="" />
            </div>
        </div>
    )
};

export default Hero;