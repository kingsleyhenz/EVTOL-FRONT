import React, { useState, useEffect } from "react";
import "../../Stylesheet/Admin/allev.css";
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
      <div className="all-wrp">
        <SideBar />
        <div className="all-ev-cont">
          <div className="all-ev-intro">
            <h2>All Registered Devices</h2>
          </div>
          <div className="all-ev-main">
            {evtols.map((evtol) => (
              <div key={evtol._id} className="ev-box">
                <img src={drone} alt="" />
                <div className="ev-misc">
                  <div className="misc-txt">
                    <p>Serial No: {evtol.serialNo}</p>
                    <p>Weight (gr): {evtol.weight}</p>
                    <p>Battery %: {evtol.battery}</p>
                  </div>
                  <div className="misc-opt">
                    <div className="misc-btn">
                      <MdOutlineRemoveRedEye />
                    </div>
                    <div className="misc-btn">
                      <MdOutlineRefresh />
                    </div>
                    <div className="misc-btn">
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
