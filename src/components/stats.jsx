import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { GiDeliveryDrone } from "react-icons/gi";
import { TbDroneOff,TbDrone } from "react-icons/tb";

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
          setTimeout(() => {
            setTotalEv(totalEvCount);
            setLoading(false);
          }, 3000);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
  
      fetchTotalEv();
    }, []);
  
    return (
      <div className="w-[31%] h-full bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 uppercase tracking-wider">
        <p className="text-[12px] font-bold text-gray-500">Total Devices</p>
        <div className="text-3xl font-black text-black">
          {loading ? <div className="w-6 h-6 border-2 border-[#ff4500] border-t-transparent rounded-full animate-spin"></div> : totalEv}
        </div>
      </div>
    );
  };
  
  const TotalIdle = () => {
    const [totalIdle, setTotalIdle] = useState(0);
    const [loading, setLoading] = useState(true);
    const baseUrl = `https://droneservice.onrender.com`
  
    useEffect(() => {
      fetchEvtols();
    }, []);
  
    const fetchEvtols = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
        const { data } = response.data;
        const idleEvtols = data.filter((evtol) => evtol.state === "IDLE");
        setTimeout(() => {
            setTotalIdle(idleEvtols.length);
            setLoading(false);
          }, 2000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
      <div className="w-[31%] h-full bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 uppercase tracking-wider">
        <p className="text-[12px] font-bold text-gray-500">Devices Available</p>
        <div className="text-3xl font-black text-black">
          {loading ? <div className="w-6 h-6 border-2 border-[#ff4500] border-t-transparent rounded-full animate-spin"></div> : totalIdle}
        </div>
      </div>
    );
  };
  
  const TotalBooked = () => {
    const [totalBooked, setTotalBooked] = useState(0);
    const [loading, setLoading] = useState(true);
    const baseUrl = `https://droneservice.onrender.com`
  
    useEffect(() => {
      fetchEvtols();
    }, []);
  
    const fetchEvtols = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
        const { data } = response.data;
        const idleEvtols = data.filter((evtol) => evtol.state === "DELIVERING");
        setTimeout(() => {
            setTotalBooked(idleEvtols.length);
            setLoading(false);
          }, 2000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
      <div className="w-[31%] h-full bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 uppercase tracking-wider">
        <p className="text-[12px] font-bold text-gray-500">Devices In Transit</p>
        <div className="text-3xl font-black text-black">
          {loading ? <div className="w-6 h-6 border-2 border-[#ff4500] border-t-transparent rounded-full animate-spin"></div> : totalBooked}
        </div>
      </div>
    );
  };
  
  export { TotalBooked, TotalEv, TotalIdle };
  