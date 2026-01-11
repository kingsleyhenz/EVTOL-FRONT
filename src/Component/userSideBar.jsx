import React from "react";
import { NavLink } from "react-router-dom";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiStorkDelivery } from "react-icons/gi";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { RiHomeFill } from "react-icons/ri";
const UserSide = () => {
  return (
    <>
      <div className="w-[17%] h-full bg-[#222222] flex flex-col items-center gap-[5%] border-r border-[#272727]">
        <div className="w-full h-[10%] flex pl-[15%] gap-[2%] items-center text-white mt-4">
          <GiDeliveryDrone className="text-white text-[27px]" />
          <h2 className="font-bold text-lg">SkyCargo</h2>
        </div>
        <div className="w-[80%] h-[60%] flex flex-col items-center gap-[4%] text-white"> 
         <NavLink to="/user-dash" className="text-white no-underline w-full py-3 flex items-center pl-[10%] rounded-[8px] gap-[8%] hover:bg-[#ff4500] hover:text-white transition-all [&.active]:bg-[#ff4500]">
            <RiHomeFill className="text-[25px]"/>
            <p className="text-[13px]">Dashboard</p>
          </NavLink>
          <NavLink to="/add-req" className="text-white no-underline w-full py-3 flex items-center pl-[10%] rounded-[8px] gap-[8%] hover:bg-[#ff4500] hover:text-white transition-all [&.active]:bg-[#ff4500]">
            <GiStorkDelivery className="text-[25px]"/>
            <p className="text-[13px]">Add Request</p>
            </NavLink>
          <NavLink to="/my-requests" className="text-white no-underline w-full py-3 flex items-center pl-[10%] rounded-[8px] gap-[8%] hover:bg-[#ff4500] hover:text-white transition-all [&.active]:bg-[#ff4500]">
            <AiFillDatabase className="text-[25px]"/>
            <p className="text-[13px]">My Requests</p>
          </NavLink>
          <NavLink to="/" className="text-white no-underline w-full py-3 flex items-center pl-[10%] rounded-[8px] gap-[8%] hover:bg-[#ff4500] hover:text-white transition-all [&.active]:bg-[#ff4500]">
            <AiFillMessage className="text-[25px]" />
            <p className="text-[13px]">Notifications</p>
          </NavLink>
          <NavLink to="/" className="text-white no-underline w-full py-3 flex items-center pl-[10%] rounded-[8px] gap-[8%] hover:bg-[#ff4500] hover:text-white transition-all [&.active]:bg-[#ff4500]">
            <MdManageAccounts className="text-[25px]"/>
             <p className="text-[13px]">Profile</p>
          </NavLink>
          <NavLink to="/" className="text-white no-underline w-full py-3 flex items-center pl-[10%] rounded-[8px] gap-[8%] hover:bg-[#ff4500] hover:text-white transition-all [&.active]:bg-[#ff4500] mt-auto">
            <AiOutlineAntDesign className="text-[25px]"/>
            <p className="text-[13px]">Sign Out</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserSide;
