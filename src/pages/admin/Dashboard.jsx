import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SideBar from "../../components/dashSide";
import { TotalBooked, TotalEv, TotalIdle } from "../../components/stats";
import DemoChart from "../../components/chart";

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
      <div className="bg-[#f5f5f5] h-screen w-full flex justify-between font-['Poppins']">
        <SideBar />
        <div className="w-[82%] h-[675px] pt-[15px] pr-[5px] overflow-y-auto [scrollbar-width:thin]">
          <div className="w-full h-[200px] mb-[20px] flex justify-between">
            <div className="w-[55%] h-full bg-[rgba(0,0,0,0.548)] rounded-[10px] bg-[url(/src/assets/images/evtolmain.jpg)] bg-no-repeat bg-center bg-cover bg-blend-darken flex justify-center items-center text-white text-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
              <h2 className="font-bold">Hi! Welcome 👋</h2>
            </div>
            <div className="w-[40%] h-full flex flex-wrap justify-between gap-[1%]">
              <TotalBooked/>
              <TotalEv/> 
              <TotalIdle/>
            </div>
          </div>
          <div className="w-full h-[400px] bg-white rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] p-4">
            <DemoChart/>
          </div>
          <div className="w-full h-[350px] mt-[20px] mb-8 flex justify-between">
            <div className="w-[60%] h-full bg-white rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]"></div>
            <div className="w-[35%] h-full bg-white rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;