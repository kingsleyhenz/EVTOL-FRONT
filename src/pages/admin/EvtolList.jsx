import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/dashSide";
import droneImg from "../../assets/images/flying-drone-background-sea-sunset_93200-2731.jpg";
import {
  MdOutlineModeEdit,
  MdOutlineRefresh,
  MdOutlineRemoveRedEye,
  MdBatteryChargingFull,
  MdSettingsInputAntenna
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
    }, [baseUrl]);

    const getStatusColor = (status) => {
        switch(status?.toUpperCase()) {
            case 'IDLE': return 'text-green-500 bg-green-50';
            case 'LOADING': return 'text-blue-500 bg-blue-50';
            case 'DELIVERING': return 'text-orange-500 bg-orange-50';
            case 'RETURNING': return 'text-purple-500 bg-purple-50';
            default: return 'text-gray-500 bg-gray-50';
        }
    };

    const getBatteryColor = (level) => {
        if (level > 75) return 'text-green-500';
        if (level > 25) return 'text-orange-500';
        return 'text-red-500';
    };

    return (
        <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
            <SideBar />
            <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-[#111]">Fleet Management</h1>
                        <p className="text-gray-500 text-sm font-medium mt-1">Status and details of all {evtols.length} registered drones.</p>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-[#111] hover:bg-gray-50 transition-all shadow-sm">
                        <MdOutlineRefresh className="text-lg" /> Refresh Fleet
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                    {evtols.map((evtol) => (
                        <div key={evtol._id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Image Header with Badge */}
                            <div className="relative h-44 overflow-hidden">
                                <img src={droneImg} alt="drone" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 left-4">
                                     <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${getStatusColor(evtol.state)}`}>
                                         {evtol.state}
                                     </span>
                                </div>
                            </div>

                            {/* Info Body */}
                            <div className="p-6 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-black text-[#111] leading-tight">{evtol.serialNo}</h3>
                                    <div className={`flex items-center gap-1 text-xs font-bold ${getBatteryColor(evtol.battery)}`}>
                                        <MdBatteryChargingFull className="text-lg" /> {evtol.battery}%
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-400 font-bold uppercase tracking-wider">Model</span>
                                        <span className="text-[#111] font-bold">{evtol.model}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-400 font-bold uppercase tracking-wider">Weight Limit</span>
                                        <span className="text-[#111] font-bold">{evtol.weight}g</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gray-50 my-2"></div>

                                {/* Actions */}
                                <div className="flex items-center justify-between gap-3">
                                    <button className="flex-1 h-10 rounded-xl bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 flex items-center justify-center text-xl transition-all"><MdOutlineRemoveRedEye /></button>
                                    <button className="flex-1 h-10 rounded-xl bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 flex items-center justify-center text-xl transition-all"><MdOutlineRefresh /></button>
                                    <button className="flex-1 h-10 rounded-xl bg-gray-50 text-gray-400 hover:text-[#ff4500] hover:bg-[#ff4500]/5 flex items-center justify-center text-xl transition-all"><MdOutlineModeEdit /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {evtols.length === 0 && (
                        <div className="col-span-full py-20 flex flex-col items-center text-gray-400 gap-4">
                             <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center animate-pulse">
                                 <MdSettingsInputAntenna className="text-3xl" />
                             </div>
                             <p className="font-medium">No drones registered in the fleet yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EvtolList;
