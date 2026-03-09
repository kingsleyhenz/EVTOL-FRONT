import React from "react";
import { GiDeliveryDrone } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import { RiNotification4Line, RiAccountPinCircleLine } from "react-icons/ri";

const Navbar = () => {
    const isAuthenticated = !!localStorage.getItem('auth_token');

    return (
        <nav className="bg-white/80 backdrop-blur-md w-full h-[80px] flex px-[5%] justify-between items-center sticky top-0 z-[50] border-b border-gray-100 font-['Poppins']">
            <div className="flex items-center gap-3">
                <div className="bg-[#ff4500] p-1.5 rounded-lg">
                    <GiDeliveryDrone className="text-white text-2xl" />
                </div>
                <p className="text-[22px] font-black tracking-tight text-[#111]">SkyCargo</p>
            </div>
            <div className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-500 uppercase tracking-widest">
                <NavLink to='/' className="hover:text-[#ff4500] transition-colors duration-300 [&.active]:text-[#ff4500]">Home</NavLink>
                <NavLink to='/features' className="hover:text-[#ff4500] transition-colors duration-300 [&.active]:text-[#ff4500]">Features</NavLink>
                <NavLink to='/about' className="hover:text-[#ff4500] transition-colors duration-300 [&.active]:text-[#ff4500]">About</NavLink>
                <NavLink to='/contact' className="hover:text-[#ff4500] transition-colors duration-300 [&.active]:text-[#ff4500]">Contact</NavLink>
            </div>
            <div className="flex items-center gap-6">
                {isAuthenticated ? (
                    <div className="flex items-center gap-4">
                        <NavLink to='/notifications' className="text-2xl text-gray-400 hover:text-[#ff4500] transition-colors">
                            <RiNotification4Line />
                        </NavLink>
                        <NavLink to='/user-dash' className="text-2xl text-gray-400 hover:text-[#ff4500] transition-colors">
                            <RiAccountPinCircleLine />
                        </NavLink>
                    </div>
                ) : (
                    <div className="flex items-center gap-8">
                        <NavLink to='/login' className="text-[14px] font-bold text-gray-900 border-b-2 border-transparent hover:border-[#ff4500] transition-all py-1 uppercase">Login</NavLink>
                        <NavLink to='/register-account' className="bg-[#111] text-white text-[13px] font-bold px-8 py-3 rounded-full hover:bg-[#ff4500] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider">Sign Up</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
