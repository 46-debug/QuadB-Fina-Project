import React from 'react'
import logo from "../assets/Logo.svg";
import menu from "../assets/menu.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full text-white p-3 bg-black/10 border-b border-[rgba(255,_255,_255,_0.10)] backdrop-blur-[10px] flex flex-col items-center">
            <div className='flex sm:justify-around px-4 justify-between w-full items-center'>
                <div className='flex items-center gap-5'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className='sm:flex sm:block hidden gap-5'>
                        <button>Product</button>
                        <button>Price</button>
                        <Link to="/changelog">
                            <button>Changelog</button>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button>Log in</button>
                    <button className='rounded-lg px-2 py-1 border border-[rgba(255,_255,_255,_0.07)] bg-[rgba(255,255,255,0)] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_22px_0px_rgba(255,255,255,0.10)] shadow-[inset_0px_0px_20px_0px_rgba(198,204,255,0.20)] shadow-[inset_0px_1px_3px_0px_rgba(199,220,255,0.35)] outline outline-1 outline-offset-[-1px] outline-white/0 backdrop-blur-[10px]'>
                        Sign up
                    </button>
                    <button className='rounded-lg p-3 sm:hidden border border-[rgba(255,_255,_255,_0.07)] bg-[rgba(255,255,255,0)] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[0px_1px_22px_0px_rgba(255,255,255,0.10)] shadow-[inset_0px_0px_20px_0px_rgba(198,204,255,0.20)] shadow-[inset_0px_1px_3px_0px_rgba(199,220,255,0.35)] outline outline-1 outline-offset-[-1px] outline-white/0 backdrop-blur-[10px]'>
                        <img src={menu} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;