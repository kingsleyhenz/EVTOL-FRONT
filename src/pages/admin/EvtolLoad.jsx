import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SideBar from "../../components/dashSide";

const Load = () => {

  return (
    <>
      <div className="bg-[#f5f5f5] h-screen w-screen flex justify-between font-['Poppins']">
        <SideBar />
        <div className="w-[82%] h-full flex flex-col gap-[10px] pt-[15px] pr-[5px]">
          <div className="w-full h-[40px]">
            <h2 className="text-xl font-bold">Register & Load Devices</h2>
          </div>
          <div className="bg-white w-full h-[650px] rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] pt-[10px] px-4 flex flex-col gap-[10%]">
            <div className="w-full h-[21%] flex flex-col justify-between">
              <p className="text-[20px] font-semibold">Register Device</p>
              <form className="w-full h-[60%] flex items-end gap-[5%] mb-4">
                <div className="w-[25%] h-[95%] flex flex-col gap-[2%]">
                  <label className="pl-[3px]">Device Name</label>
                  <input className="bg-transparent pl-[5px] h-[65%] border border-[#ebe9e9] rounded-[5px] outline-none" type="text" placeholder="Enter Device Name"/>
                </div>
                <div className="w-[25%] h-[95%] flex flex-col gap-[2%]">
                  <label className="pl-[3px]">Device Weight</label>
                  <input className="bg-transparent pl-[5px] h-[65%] border border-[#ebe9e9] rounded-[5px] outline-none" type="number" placeholder="Enter Device Weight"/>
                </div>
                <div className="w-[25%] h-[95%] flex flex-col justify-end">
                  <button className="h-[65%] w-[55%] rounded-[25px] bg-[#f5f5f5] border-none cursor-pointer text-[14px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#e1e1e1] transition-colors">Register Device</button>
                </div>
              </form>
            </div>

            <div className="w-full h-[21%] flex flex-col justify-between">
              <p className="text-[20px] font-semibold">Load Device</p>
              <form className="w-full h-[60%] flex items-end gap-[5%] mb-4">
                <div className="w-[25%] h-[95%] flex flex-col gap-[2%]">
                  <label className="pl-[3px]">Requests Id</label>
                  <input className="bg-transparent pl-[5px] h-[65%] border border-[#ebe9e9] rounded-[5px] outline-none" type="text" placeholder="Enter Request Id"/>
                </div>
                <div className="w-[25%] h-[95%] flex flex-col gap-[2%]">
                  <label className="pl-[3px]">Drone Device</label>
                  <select className="bg-transparent pl-[5px] h-[65%] border border-[#ebe9e9] rounded-[5px] outline-none">
                    <option value="" key=""></option>
                    <option value="" key="">NNE1E39</option>
                    <option value="" key="">NNE1E39</option>
                    <option value="" key="">NNE1E39</option>
                    <option value="" key="">NNE1E39</option>
                  </select>
                </div>
                <div className="w-[25%] h-[95%] flex flex-col justify-end">
                  <button className="h-[65%] w-[55%] rounded-[25px] bg-[#f5f5f5] border-none cursor-pointer text-[14px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#e1e1e1] transition-colors">Deploy Device</button>
                </div>
              </form>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};
export default Load;
