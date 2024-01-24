import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../Stylesheet/Load.css";
import SideBar from "../Component/dashSide";

const Load = () => {

  return (
    <>
      <div className="load-wrp">
        <SideBar />
        <div className="load-ev-cont">
          <div className="load-ev-intro">
            <h2>Register & Load Devices</h2>
          </div>
          <div className="load-bx">
            <div className="reg-bx">
              <p>Register Device</p>
              <form className="reg-frm">
                <div className="inp-hld">
                  <label>Device Name</label>
                  <input type="text" placeholder="Enter Device Name"/>
                </div>
                <div className="inp-hld">
                  <label>Device Weight</label>
                  <input type="number" placeholder="Enter Device Weight"/>
                </div>
                <div className="inp-hld butt">
                  <button>Register Device</button>
                </div>
              </form>
            </div>

            <div className="reg-bx">
              <p>Load Device</p>
              <form className="reg-frm">
                <div className="inp-hld">
                  <label>Requests Id</label>
                  <input type="text" placeholder="Enter Request Id"/>
                </div>
                <div className="inp-hld">
                  <label>Drone Device</label>
                  <select>
                    <option value="" key=""></option>
                    <option value="" key="">NNE1E39</option>
                    <option value="" key="">NNE1E39</option>
                    <option value="" key="">NNE1E39</option>
                    <option value="" key="">NNE1E39</option>
                  </select>
                </div>
                <div className="inp-hld butt">
                  <button>Deploy Device</button>
                </div>
              </form>
            </div>
          </div>
      </div>
      </div>
    </>
  );
};
export default Load;

