import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import '../Stylesheet/stat.css'

const TotalEv = () => {
    const [totalEv, setTotalEv] = useState(0);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTotalEv = async () => {
        try {
          const response = await axios.get("http://localhost:4000/api/v1/evtol/admin/all");
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
        <p>Total EVTOLs</p>
        {loading ? <div className="loader"></div> : totalEv}
        <a href="">View</a>
      </div>
    );
  };
  
  const TotalIdle = () => {
    const [totalIdle, setTotalIdle] = useState(0);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchEvtols();
    }, []);
  
    const fetchEvtols = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/evtol/admin/all");
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
        <p>EVTOLs Available</p>
        {loading ? <div className="loader"></div> : totalIdle}
        <a href="">View</a>
      </div>
    );
  };
  
  const TotalBooked = () => {
    const [totalBooked, setTotalBooked] = useState(0);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchEvtols();
    }, []);
  
    const fetchEvtols = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/evtol/admin/all");
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
        <p>EVTOLs In Transit</p>
        {loading ? <div className="loader"></div> : totalBooked}
        <a href="">View</a>
      </div>
    );
  };
  
  export { TotalBooked, TotalEv, TotalIdle };
  