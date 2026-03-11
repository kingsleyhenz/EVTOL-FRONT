import React from "react";
import { NavLink } from "react-router-dom";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoCreateOutline, IoDownloadOutline } from "react-icons/io5";
import { BsClipboardData } from 'react-icons/bs';
import { SiDatabricks } from 'react-icons/si';
import { AiOutlineLogout } from "react-icons/ai";
import { MdHistory } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-[260px] h-full bg-white flex flex-col items-center border-r border-gray-100 font-['Poppins']">
      {/* Brand */}
      <div className="w-full h-24 flex pl-8 gap-3 items-center text-[#111]">
        <div className="bg-[#ff4500] p-1.5 rounded-lg border border-white/20">
          <GiDeliveryDrone className="text-white text-2xl" />
        </div>
        <h2 className="font-black text-2xl tracking-tighter">SkyCargo</h2>
      </div>

      {/* Navigation Links */}
      <div className="w-full flex-1 flex flex-col px-4 gap-2 mt-4 text-gray-500 font-medium">
        <NavLink to="/Overview" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <IoCreateOutline className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">Device Overview</p>
        </NavLink>

        <NavLink to="/load" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <IoDownloadOutline className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">Register & Load</p>
        </NavLink>

        <NavLink to="/all" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <BsClipboardData className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">All Devices</p>
        </NavLink>

        <NavLink to="/requests" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <SiDatabricks className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">All Requests</p>
        </NavLink>

        <NavLink to="/viewbattery" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <MdHistory className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">History</p>
        </NavLink>

        <div className="mt-auto mb-6 w-full">
          <NavLink to="/" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 text-red-500 hover:bg-red-50 transition-all">
            <AiOutlineLogout className="text-xl" />
            <p className="text-sm font-semibold tracking-wide">Sign Out</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;