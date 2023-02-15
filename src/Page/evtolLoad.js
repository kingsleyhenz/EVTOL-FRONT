import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "../Stylesheet/dashMain.css";
import SideBar from "../Component/dashSide";

const Load = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [code, setCode] = useState("");
    const [carryTo, setCarryTo] = useState("");
    const [serialNo, setSerialNo] = useState("");
    const [image, setImage] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitting form with serialNo", serialNo);
      axios
        .post(`http://localhost:4000/api/v1/evtol/admin/Load/${serialNo}`, {
          name,
          weight,
          code,
          carryTo,
        })
        .then((res) => {
            console.log("Response from server:", res);
          if (res.data.status === "Success") {
            Swal.fire("Success", "Loaded successfully!", "success");
          } else {
            Swal.fire("Error", res.data.message, "error");
          }
        })
        .catch((err) => {
          console.error(err);
          Swal.fire("Error", "An error occurred", "error");
        });
    };

    const handleImageSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with image for medication", name);
        const formData = new FormData();
        formData.append("profile", image);
        axios
          .post(`http://evtol-back-production.up.railway.app/api/v1/evtol/admin/UploadImage/${name}`, formData)
          .then((res) => {
              console.log("Response from server:", res);
            if (res.data.status === "Success") {
              Swal.fire("Success", "Image uploaded successfully!", "success");
            } else {
              Swal.fire("Error", res.data.message, "error");
            }
          })
          .catch((err) => {
            console.error(err); 
            Swal.fire("Error", "An error occurred", "error");
          });
      };
  return (
    <>
      <div className="wrp">
        <SideBar />
        <div className="main">
          <p>Medication Loading Page</p>
          <div className="fleetbx">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Medication Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Weight(gr)" value={weight} onChange={(e) => setWeight(e.target.value)} required />
              <input type="text" placeholder="Medication Code" value={code} onChange={(e) => setCode(e.target.value)} required />
              <input type="text" placeholder="Destination" value={carryTo} onChange={(e) => setCarryTo(e.target.value)} required />
              <input type="text" placeholder="EVTOL SERIAL NO" value={serialNo} onChange={(e) =>{ console.log(e.target.value); setSerialNo(e.target.value)} }required />
              <button type="submit">Load EVTOL</button>
            </form>
            <form id="imgform" onSubmit={handleImageSubmit}>
                <input type="text" placeholder="Medication Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="file" name="profile" onChange={(e) => setImage(e.target.files[0])} required/>
                <button type="submit">Upload Image</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Load;
