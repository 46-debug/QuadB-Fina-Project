import React from 'react';
import logo from "../assets/Logo.svg";
import XLogo from "../assets/xLogo.svg";
import FLogo from "../assets/fLogo.svg";
import ILogo from "../assets/iLogo.svg";
import downIcon from "../assets/drop down.svg";
import aeroUpIcon from "../assets/Arrow Up.svg";

const Footer = () => {
    return (
        <div className='text-white'>
            <div className='flex justify-between gap-10 flex-wrap items-start py-10 px-20'>
                <img src={logo} alt="" />
                <div className='flex sm:gap-20 gap-10 flex-wrap'>
                    <ul className='flex flex-col gap-5'>
                        <li>Products</li>
                        <li className='text-white/60'>Courses</li>
                        <li className='text-white/60'>Tutorials</li>
                        <li className='text-white/60'>Pricing</li>
                    </ul>
                    <ul className='flex flex-col gap-5'>
                        <li>Company</li>
                        <li className='text-white/60'>About Us</li>
                        <li className='text-white/60'>Contact Us</li>
                    </ul>
                    <ul className='flex flex-col gap-5'>
                        <li>Resources</li>
                        <li className='text-white/60'>Downloads</li>
                        <li className='text-white/60'>Community</li>
                    </ul>
                    <div className='flex flex-col gap-3'>
                        <h4>FOLLOW US</h4>
                        <div className='flex justify-between gap-3'>
                            <img className='p-2.5 border border-white/10 rounded-full' src={FLogo} alt="" />
                            <img className='p-2.5 border border-white/10 rounded-full' src={XLogo} alt="" />
                            <img className='p-2.5 border border-white/10 rounded-full' src={ILogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex text-white/60 justify-between gap-10 flex-wrap border-t border-white/10 items-center px-20 py-5'>
                <h4>© 2024 Company</h4>
                <div className='flex gap-10 flex-wrap items-center'>
                    <h4>Terms of Service</h4>
                    <h4>Privacy Policy</h4>
                    <h4 className='flex justify-center items-center gap-2'>English <img src={downIcon} alt="" /></h4>
                    <button className='p-3 border border-white/10 rounded-full'><img src={aeroUpIcon} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Footer;