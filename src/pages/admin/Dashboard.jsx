import React from "react";
import SideBar from "../../components/dashSide";
import { TotalBooked, TotalEv, TotalIdle } from "../../components/stats";
import DemoChart from "../../components/chart";

const Home = () => {
  return (
    <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
      <SideBar />
      <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
        <div className="w-full">
            <h1 className="text-2xl font-black tracking-tight text-[#111]">Admin Overview</h1>
            <p className="text-gray-500 text-sm font-medium leading-relaxed mt-1">Real-time monitoring of all SkyCargo drone operations.</p>
        </div>

        <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 relative h-[240px] rounded-3xl overflow-hidden bg-[url(/src/assets/images/evtolmain.jpg)] bg-center bg-cover border border-gray-100 shadow-sm group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
               <h2 className="text-4xl font-black tracking-tight mb-2">Welcome Back, Admin 👋</h2>
               <p className="text-lg font-medium opacity-90 max-w-xl">You have complete control over the fleet. Monitor battery levels, manage registrations, and track every single delivery in real-time.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 h-[240px]">
            <TotalEv />
            <TotalIdle />
            <TotalBooked />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 min-h-[450px]">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-black text-[#111]">Fleet Activity Performance</h3>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-[#ff4500]"></span> Active
                        </span>
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Maintenance
                        </span>
                    </div>
                </div>
                <div className="w-full h-[320px]">
                    <DemoChart />
                </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6 mt-10">
                <h3 className="text-lg font-black text-[#111]">Quick Actions</h3>
                <div className="flex flex-col gap-4 ">
                    <button className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 hover:border-[#ff4500] hover:bg-white transition-all text-left">
                        <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 text-[#ff4500] flex items-center justify-center text-xl">🚀</div>
                        <div>
                            <p className="text-sm font-bold text-[#111]">Register Drone</p>
                            <p className="text-xs font-medium text-gray-400">Add new device to fleet</p>
                        </div>
                    </button>
                    <button className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 hover:border-[#ff4500] hover:bg-white transition-all text-left">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl">⚡</div>
                        <div>
                            <p className="text-sm font-bold text-[#111]">Fleet Battery</p>
                            <p className="text-xs font-medium text-gray-400">Check overall status</p>
                        </div>
                    </button>
                    <button className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 hover:border-[#ff4500] hover:bg-white transition-all text-left">
                        <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center text-xl">📦</div>
                        <div>
                            <p className="text-sm font-bold text-[#111]">Load Records</p>
                            <p className="text-xs font-medium text-gray-400">View recent logs</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Home;