import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "../Stylesheet/dashMain.css";
import SideBar from "../Component/dashSide";

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
    axios
      .post("http://localhost:4000/api/v1/evtol/admin/Register", evtol)
      .then((res) => {
        if (res.data.status === "Success") {
          Swal.fire({
            title: "Success!",
            text: "EVTOL Registered Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: res.data.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        window.location.reload();
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
      <div className="wrp">
        <SideBar />
        <div className="main">
          <p>Registeration Page</p>
          <div className="fleetbx">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Serial No." name="serialNo" value={evtol.serialNo}onChange={handleChange} required/>
              <input type="text" placeholder="Model" name="model" value={evtol.model} onChange={handleChange} readOnly/>
              <input type="text" placeholder="Weight(gr)" name="weight" value={evtol.weight} onChange={handleChange} required/>
              <input type="text" placeholder="Battery Level %" name="battery" value={evtol.battery} onChange={handleChange} readOnly/>
              <input name="state" placeholder="State" value={evtol.state} onChange={handleChange} readOnly></input>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
