import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "../Stylesheet/Load.css";
import SideBar from "../Component/dashSide";

const Load = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setWeight] = useState("");
  const [code, setCode] = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [serialNo, setSerialNo] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`https://evtol-back-production.up.railway.app/api/v1/evtol/admin/Load/${serialNo}`, {
    axios
      .post(`http://localhost:4000/api/v1/evtol/admin/Load/${serialNo}`, {
        name,
        email,
        weight,
        code,
        status,
        destination,
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
    const formData = new FormData();
    formData.append("profile", image);
    axios
      .post(
        `http://localhost:4000/api/v1/evtol/admin/UploadImage/${name}`,
        formData
      )
      .then((res) => {
        console.log("Response from server:", JSON.stringify(res, null, 2) );
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

  const handleDeploy = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/v1/evtol/admin/deploy/${serialNo}`)
      .then((res) => {
        console.log("Response from server:", res);
        if (res.data.status === "success") {
          Swal.fire("Success", "Medications are being delivered!", "success");
        } else {
          Swal.fire(
            "Error",
            "An error occurred while deploying medications.",
            "error"
          );
        }
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status === 400 &&
          err.response.data.message === "EVTOL is already marked as delivering."
        ) {
          Swal.fire(
            "Warning",
            "EVTOL is already marked as delivering",
            "warning"
          );
        } else {
          console.error(err);
          Swal.fire(
            "Error",
            "An error occurred while deploying medications.",
            "error"
          );
        }
      });
  };

  return (
    <>
      <div className="load-wrp">
        <SideBar />
        <div className="load-ev-cont">
          <div className="load-ev-intro">
            <h2>Load Drone Devices</h2>
          </div>
          <div className="load-bx">
            <div className="basic-info">
              <p>Basic Info</p>
              <form onSubmit={handleSubmit} className="fld">
                <div className="fld-bx">
                  <label>Item Name</label>
                  <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="fld-bx">
                  <label>Item Weight</label>
                  <input
                    type="text"
                    placeholder="Weight(gr)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <div className="fld-bx">
                  <label>Item Code</label>
                  <input
                    type="text"
                    placeholder="Item Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>
                <div className="fld-bx">
                  <label>Destination</label>
                  <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
                <div className="fld-bx">
                  <label>Recipient Email</label>
                  <input
                    type="text"
                    placeholder="Recipient Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="fld-bx">
                  <label>Drone Device</label>
                  <input
                    type="text"
                    placeholder="Drone Device"
                    value={serialNo}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSerialNo(e.target.value);
                    }}
                    required
                  />
                </div>
                <button type="submit">Load EVTOL</button>
                {/**/}
              </form>
            </div>

            <div className="img-info">
              <p>Image Upload</p>
              <form className="imgform" onSubmit={handleImageSubmit}>
                <div className="img-inp-cont">
                  <div className="img-bx">
                    <input
                      type="file"
                      name="profile"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                  </div>
                  <div className="img-bx nv">
                    <label>Item Name</label>
                    <input
                      type="text"
                      placeholder="Item Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit">Upload Image</button>
              </form>
            </div>

            <div className="dep-info">
              <form className="depform" onSubmit={handleDeploy}>
                <button type="submit">Deploy Drone</button>
                <input
                  type="text"
                  placeholder="Drone Device"
                  value={serialNo}
                  onChange={(e) => {
                    setSerialNo(e.target.value);
                  }}
                  required
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Load;
{
  /* 



             */
}
