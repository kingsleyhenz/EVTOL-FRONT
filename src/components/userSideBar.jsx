import React from "react";
import { NavLink } from "react-router-dom";
import { GiDeliveryDrone, GiStorkDelivery } from "react-icons/gi";
import { AiFillDatabase, AiFillMessage, AiOutlineAntDesign } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { RiHomeFill } from "react-icons/ri";

const UserSide = () => {
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
        <NavLink to="/user-dash" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <RiHomeFill className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">Dashboard</p>
        </NavLink>
        
        <NavLink to="/add-req" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <GiStorkDelivery className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">New Request</p>
        </NavLink>
        
        <NavLink to="/my-requests" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <AiFillDatabase className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">My Requests</p>
        </NavLink>
        
        <NavLink to="/notifications" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <AiFillMessage className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">Notifications</p>
        </NavLink>
        
        <NavLink to="/profile" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 hover:bg-gray-50 hover:text-[#111] transition-all [&.active]:bg-black [&.active]:text-white">
          <MdManageAccounts className="text-xl group-[.active]:text-white" />
          <p className="text-sm font-semibold tracking-wide">Profile</p>
        </NavLink>

        <div className="mt-auto mb-6 w-full">
            <NavLink to="/" className="group flex items-center px-4 py-3.5 rounded-2xl gap-4 text-red-500 hover:bg-red-50 transition-all">
            <AiOutlineAntDesign className="text-xl" />
            <p className="text-sm font-semibold tracking-wide">Sign Out</p>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserSide;
