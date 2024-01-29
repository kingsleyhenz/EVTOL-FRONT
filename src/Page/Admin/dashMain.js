import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Stylesheet/Admin/dashMain.css";
import SideBar from "../../Component/dashSide";
import { TotalBooked, TotalEv, TotalIdle } from "../../Component/stats";
import DemoChart from '../../Component/chart';

const Home = () => {
  const [evtol, setEvtol] = useState({
    serialNo: "",
    model: "",
    weight: "",
    battery: "100",
    state: "IDLE",
  });

  const handleChange = (e) => {
    setEvtol({
      ...evtol,
      [e.target.name]: e.target.value,
    });

    console.log(evtol)
  };
  const weight = () => {
    if (parseInt(evtol.weight) <= 100) {
      setEvtol({
        ...evtol,
        model: "",
      });
    }

    if (parseInt(evtol.weight) >= 100 && parseInt(evtol.weight) <= 200) {
      setEvtol({
        ...evtol,
        model: "Lightweight",
      });
    }  if (
      parseInt(evtol.weight) >= 201 &&
      parseInt(evtol.weight) <= 300
    ) {
      setEvtol({
        ...evtol,
        model: "Middleweight",
      });
    }  if (
      parseInt(evtol.weight) >= 301 &&
      parseInt(evtol.weight) <= 400
    ) {
      setEvtol({
        ...evtol,
        model: "Cruiserweight",
      });
    }  if (
      parseInt(evtol.weight) >= 401 &&
      parseInt(evtol.weight) <= 500
    ) {
      setEvtol({
        ...evtol,
        model: "Heavyweight",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       axios.post("http://localhost:4000/api/v1/evtol/admin/Register", evtol)
      .then((res) => {
        if (res.data.status === "Success") {
          Swal.fire({
            title: "Success!",
            text: "EVTOL Registered Successfully",
            icon: "success",
            confirmButtonText: "OK",
            timer: 3000,
            timerProgressBar: true,
            onClose: () => {
              window.location.reload();
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: res.data.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        }        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    weight()
    console.log(evtol.weight)
  },[evtol.weight, evtol.model])

  return (
    <>
      <div className="ov-wrp">
        <SideBar />
        <div className="dashmain">
          <div className="wel-cnt">
            <div className="wel-bx">
              <h2>Hi! Welcome 👋</h2>
            </div>
            <div className="wel-stats">
              <TotalBooked/>
              <TotalEv/> 
              <TotalIdle/>
            </div>
          </div>
          <div className="graph-con">
            <DemoChart/>
          </div>
          <div className="tab-stat-con">
            <div className="tab-stat"></div>
            <div className="misc-stat"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

{/* <div className="fleetbx">
            <div className="dubs">
              <TotalEv/>
              <TotalIdle/>
              <TotalBooked/>
            </div>
            <form onSubmit={handleSubmit} className="regForm">
              <h2>Register New Drone</h2>
              <input type="text" placeholder="Serial No." name="serialNo" value={evtol.serialNo}onChange={handleChange} required/>
              <input type="text" placeholder="Weight(gr)" name="weight" value={evtol.weight} onChange={handleChange} required/>
              <button type="submit">Register</button>
            </form>
          </div> */}