import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import '../Stylesheet/stat.css'
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
      <div className="statbx">
        {/* <GiDeliveryDrone className="drone-i"/> */}
        <p className="blue">Total Devices</p>
        {loading ? <div className="loader"></div> : totalEv}
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
      <div className="statbx">
        {/* <TbDrone className="drone-i"/> */}
        <p>Devices Available</p>
        {loading ? <div className="loader"></div> : totalIdle}
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
      <div className="statbx">
        {/* <TbDroneOff className="drone-i"/> */}
        <p className="red">Devices In Transit</p>
        {loading ? <div className="loader"></div> : totalBooked}
      </div>
    );
  };
  
  export { TotalBooked, TotalEv, TotalIdle };
  