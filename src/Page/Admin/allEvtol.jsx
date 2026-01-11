import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../Component/dashSide";
import drone from "../../Image/flying-drone-background-sea-sunset_93200-2731.jpg";
import {
  MdOutlineModeEdit,
  MdOutlineRefresh,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

const EvtolList = () => {
  const [evtols, setEvtols] = useState([]);
  const baseUrl = `https://droneservice.onrender.com`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
        setEvtols(result.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#f5f5f5] h-screen w-screen flex justify-between font-['Poppins']">
        <SideBar />
        <div className="w-[82%] h-full flex flex-col gap-[15px] pt-[15px] pr-[5px]">
          <div className="w-[60%] h-[35px]">
            <h2 className="text-xl font-bold">All Registered Devices</h2>
          </div>
          <div className="bg-white w-full h-[600px] overflow-y-auto flex flex-wrap gap-[3%] justify-center p-[10px_5px] rounded-[10px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {evtols.map((evtol) => (
              <div key={evtol._id} className="bg-white w-[250px] h-[250px] rounded-[10px] flex flex-col pt-[5px] items-center gap-[5%] border border-[#eeeeee]">
                <img src={drone} alt="" className="w-[95%] h-[60%] rounded-[10px] object-cover" />
                <div className="w-[95%] h-[32%] flex justify-between">
                  <div className="w-[65%] h-full flex flex-col justify-between text-[12px]">
                    <p>Serial No: {evtol.serialNo}</p>
                    <p>Weight (gr): {evtol.weight}</p>
                    <p>Battery %: {evtol.battery}</p>
                  </div>
                  <div className="w-[20%] h-full flex flex-col justify-between">
                    <div className="w-full h-[30%] border border-[#bbbbbb] rounded-[10%] cursor-pointer flex justify-center items-center text-[20px] text-[#555555] hover:bg-[#1f1f1f] hover:text-white hover:border-none transition-colors">
                      <MdOutlineRemoveRedEye />
                    </div>
                    <div className="w-full h-[30%] border border-[#bbbbbb] rounded-[10%] cursor-pointer flex justify-center items-center text-[20px] text-[#555555] hover:bg-[#1f1f1f] hover:text-white hover:border-none transition-colors">
                      <MdOutlineRefresh />
                    </div>
                    <div className="w-full h-[30%] border border-[#bbbbbb] rounded-[10%] cursor-pointer flex justify-center items-center text-[20px] text-[#555555] hover:bg-[#1f1f1f] hover:text-white hover:border-none transition-colors">
                      <MdOutlineModeEdit />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EvtolList;
