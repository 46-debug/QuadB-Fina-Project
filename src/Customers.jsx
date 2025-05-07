import React from 'react';
import hexagons from "./assets/Hexagons.svg";
import bg from "./assets/bg.png";
import ai from "./assets/AI.svg";
import avatar from "./assets/Avatar.png";
import blur from "./assets/Blur 6.png";

const Customers = () => {
    return (
        <div className={`text-white p-5 relative bg-center bg-no-repeat bg-[url(./assets/bg.png)] flex flex-col justify-center items-center`}>
            <img className='absolute sm:top-[50%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={blur} alt="" />
            <div className='flex w-full justify-around gap-5 px-5'>
                <h3 id='heading4' className='text-4xl sm:w-[250px] font-light'>Used by top teams across the globe</h3>
                <h1 id='heading5' className='sm:text-8xl text-6xl flex flex-col'>110K<span className='text-sm text-white/50 text-end'>Customers since 2023</span></h1>
            </div>
            <img src={hexagons} alt="" />

            <div className='sm:w-[650px] px-5 flex flex-col gap-5 items-start justify-start'>
                <img src={ai} alt="" />

                <p className="text-white/70 font-light">This UI kit commendably goes against the grain by introducing creative,
                    vibrant diffusions of color and light with glass, line, and flat styling options,
                    all with accompanying dark and light modes. All of these components could easily be used as the foundation for a new project that wants to stand out.
                </p>

                <div className='flex items-center gap-5'>
                    <img src={avatar} alt="" />
                    <h3 className='flex flex-col font-light'>Brendan Ciccone <span className='text-white/70'>Startup design partner</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Customers;