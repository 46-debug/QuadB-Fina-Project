import React from 'react';
import aero from "./assets/aero.svg";
import cardLayout from "./assets/Layout.svg";
import { Link } from 'react-router-dom';

const ChangeLog = () => {
    return (
        <div className='flex flex-col gap-10 sm:p-20 p-5'>
            <div className="sm:w-[750px]">
                <div>
                    <span class="text-white text-3xl font-medium">DesignCode UI </span>
                    <span class="text-zinc-600 text-3xl font-medium">provides an extensive design system that includes hundreds of Figma UI components and templates, all ready for integration with Framer.</span>
                </div>
                <Link to="/tutorial">
                    <button className='px-7 flex text-white mt-10 py-3 rounded-[10px] border-[1px] border-[solid] border-[rgba(39,55,207,0.40)] bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_-40.91%,_#402788_132.95%)] [box-shadow:0px_10px_40px_0px_rgba(63,_74,_175,_0.50),_0px_10px_30px_0px_rgba(73,_123,_255,_0.70)_inset] backdrop-filter backdrop-blur-[10px] justify-center items-center gap-3'>
                        Get Started
                        <img src={aero} alt="" />
                    </button>
                </Link>
            </div>
            <img src={cardLayout} alt="" />
        </div>
    )
}

export default ChangeLog;