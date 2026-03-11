import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TbDroneOff, TbDrone, TbRadioactive } from "react-icons/tb";

const TotalEv = () => {
    const [totalEv, setTotalEv] = useState(0);
    const [loading, setLoading] = useState(true);
    const baseUrl = `https://droneservice.onrender.com`
  
    useEffect(() => {
      const fetchTotalEv = async () => {
        try {
          const response = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
          const data = response.data;
          const totalEvCount = data.data.length;
          setTotalEv(totalEvCount);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
  
      fetchTotalEv();
    }, [baseUrl]);
  
    return (
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-2xl">
           <TbDrone />
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Total Fleet</p>
          <div className="text-2xl font-black text-[#111]">
            {loading ? <div className="w-5 h-5 border-2 border-[#ff4500] border-t-transparent rounded-full animate-spin"></div> : totalEv}
          </div>
        </div>
      </div>
    );
  };
  
  const TotalIdle = () => {
    const [totalIdle, setTotalIdle] = useState(0);
    const [loading, setLoading] = useState(true);
    const baseUrl = `https://droneservice.onrender.com`
  
    useEffect(() => {
        const fetchEvtols = async () => {
            try {
              const response = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
              const { data } = response.data;
              const idleEvtols = data.filter((evtol) => evtol.state === "IDLE");
              setTotalIdle(idleEvtols.length);
              setLoading(false);
            } catch (error) {
              console.error(error);
              setLoading(false);
            }
          };
      fetchEvtols();
    }, [baseUrl]);
  
    return (
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 text-2xl">
           <TbRadioactive />
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Available</p>
          <div className="text-2xl font-black text-[#111]">
            {loading ? <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div> : totalIdle}
          </div>
        </div>
      </div>
    );
  };
  
  const TotalBooked = () => {
    const [totalBooked, setTotalBooked] = useState(0);
    const [loading, setLoading] = useState(true);
    const baseUrl = `https://droneservice.onrender.com`
  
    useEffect(() => {
        const fetchEvtols = async () => {
            try {
              const response = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
              const { data } = response.data;
              const idleEvtols = data.filter((evtol) => evtol.state === "DELIVERING");
              setTotalBooked(idleEvtols.length);
              setLoading(false);
            } catch (error) {
              console.error(error);
              setLoading(false);
            }
          };
      fetchEvtols();
    }, [baseUrl]);
  
    return (
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-[#ff4500]/5 rounded-xl flex items-center justify-center text-[#ff4500] text-2xl">
           <TbDroneOff />
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">In Mission</p>
          <div className="text-2xl font-black text-[#111]">
            {loading ? <div className="w-5 h-5 border-2 border-[#ff4500] border-t-transparent rounded-full animate-spin"></div> : totalBooked}
          </div>
        </div>
      </div>
    );
  };
  
  export { TotalBooked, TotalEv, TotalIdle };
  