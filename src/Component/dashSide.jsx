import React from "react";
import {NavLink} from "react-router-dom"
import { IoCreateOutline, IoDownloadOutline } from "react-icons/io5";
import {BsClipboardData} from 'react-icons/bs'
import {SiDatabricks} from 'react-icons/si'
import {MdOutlineCropFree} from 'react-icons/md'
import { GiDeliveryDrone } from "react-icons/gi";

const SideBar =()=>{ 
    return(
        <>
        <div className="bg-white w-[17%] h-full flex flex-col items-center gap-[30px] py-[1%] max-md:w-full max-md:flex-row max-md:mt-[30px] max-md:justify-center font-sans">
        <div className="text-black text-[50px]">
            <GiDeliveryDrone/>
        </div>
            <div className="h-[50%] w-full flex flex-col items-center gap-[5%] max-md:h-full max-md:flex-row max-md:justify-between">
            <NavLink to="/Overview" className="w-[85%] py-3 flex items-center no-underline text-black text-[15px] font-medium pl-[10%] rounded-[10px] gap-[10%] hover:bg-[#e9e9e9] transition-all hover:text-black">
                <IoCreateOutline className="text-[20px] md:block hidden"/>
                <p className="max-md:hidden">Device Overview</p>
                <IoCreateOutline className="text-[23px] md:hidden block"/>
            </NavLink>
            <NavLink to="/load" className="w-[85%] py-3 flex items-center no-underline text-black text-[15px] font-medium pl-[10%] rounded-[10px] gap-[10%] hover:bg-[#e9e9e9] transition-all hover:text-black">
                <IoDownloadOutline className="text-[20px] md:block hidden"/>
                <p className="max-md:hidden">Register & Load</p>
                <IoDownloadOutline className="text-[23px] md:hidden block"/>
            </NavLink>
            <NavLink to="/all" className="w-[85%] py-3 flex items-center no-underline text-black text-[15px] font-medium pl-[10%] rounded-[10px] gap-[10%] hover:bg-[#e9e9e9] transition-all hover:text-black">
                <BsClipboardData className="text-[20px] md:block hidden"/>
                <p className="max-md:hidden">All Devices</p>
                <BsClipboardData className="text-[23px] md:hidden block"/>
            </NavLink>
            <NavLink to="/requests" className="w-[85%] py-3 flex items-center no-underline text-black text-[15px] font-medium pl-[10%] rounded-[10px] gap-[10%] hover:bg-[#e9e9e9] transition-all hover:text-black">
               <SiDatabricks className="text-[20px] md:block hidden"/>
               <p className="max-md:hidden">All Requests</p>
               <SiDatabricks className="text-[23px] md:hidden block"/>
            </NavLink>
            <NavLink to="/viewbattery" className="w-[85%] py-3 flex items-center no-underline text-black text-[15px] font-medium pl-[10%] rounded-[10px] gap-[10%] hover:bg-[#e9e9e9] transition-all hover:text-black">
                <p className="">History</p>
            </NavLink>
            </div>
        </div>
        </>
    )
}


export default SideBar