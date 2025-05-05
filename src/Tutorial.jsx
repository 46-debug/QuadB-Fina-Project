import React from 'react';
import aero from "./assets/aero.svg";
import blur from "./assets/Blur 6.png";
import card1 from "./assets/card 1.svg";
import card2 from "./assets/card 2.svg";
import { Link } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div className='flex flex-col text-white gap-10 p-5 overflow-hidden'>
            <div className="sm:w-[750px]">
                <div>
                    <span class="text-white text-3xl font-medium">Master Design Systems.</span>
                    <span class="text-zinc-600 text-3xl font-medium">Streamline your workflow, enhance aesthetics, and create stunning interfaces with our specialized, user-friendly, and comprehensive design insights.</span>
                </div>
                <Link to="/features">
                    <button className='px-7 flex text-white mt-10 py-3 rounded-[10px] border-[1px] border-[solid] border-[rgba(39,55,207,0.40)] bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_-40.91%,_#402788_132.95%)] [box-shadow:0px_10px_40px_0px_rgba(63,_74,_175,_0.50),_0px_10px_30px_0px_rgba(73,_123,_255,_0.70)_inset] backdrop-filter backdrop-blur-[10px] justify-center items-center gap-3'>
                        START FREE TRIAL
                        <img src={aero} alt="" />
                    </button>
                </Link>
            </div>

            <div className='flex flex-col gap-5 relative'>
                <img className='absolute w-[800px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={blur} alt="" />
                <div className='flex z-10 flex-wrap gap-5 justify-center items-center'>
                    <img src={card1} alt="" />
                    <img src={card2} alt="" />
                </div>

                <div className='py-10 flex flex-wrap gap-7 justify-around px-5 bg-[radial-gradient(ellipse_102.92%_127.01%_at_50.00%_0.00%,_rgba(255,_255,_255,_0.03)_0%,_rgba(255,_255,_255,_0.08)_100%)] rounded-[20px] border border-white/10'>
                    <div className='flex gap-2'>
                        <div className='w-9 h-9 flex items-center justify-center rounded-full border border-white/20'>
                            <div className='w-6 h-6 flex items-center justify-center border rounded-full'>1</div>
                        </div>
                        <h3 className='sm:w-[366px]'>Drag and drop. <span className='font-light text-white/70'>Enhance your design workflow with our drag-and-drop feature, allowing for easy placement and rearrangement of UI components.</span></h3>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-9 h-9 flex items-center justify-center rounded-full border border-white/20'>
                            <div className='w-6 h-6 flex items-center justify-center border rounded-full'>2</div>
                        </div>
                        <h3 className='sm:w-[366px]'>Customize. <span className='font-light text-white/70'>Our customization options empower designers to tailor UI components to their specific needs. Adjust colors, fonts, and sizes.</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;