import { React } from "react";
import Navbar from "./../../Component/Navbar";
import "../../Stylesheet/User/makeRequest.css";
import { Textarea } from "@mantine/core";

const MakeRequest = () => {
  return (
    <>
      <Navbar />
      <div className="reqbody">
        <h2>Make A Request</h2>
        <form className="reqform">
          <div className="req-hld">
            <label>Parcel Country</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Parcel State</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Parcel City</label>
            <input type="text"/> 
          </div>
          <div className="req-hld">
            <label>Parcel Address</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient Name</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient Phone No</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient Email</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient Country</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient State</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient City</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Recipient Address</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Parcel Height</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Parcel Width</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Parcel Length</label>
            <input type="text"/>
          </div>
          <div className="req-hld">
            <label>Parcel Weight</label>
            <input type="text"/>
          </div>
          {/* <div className="req-hld">
            <label>Parcel Details</label>
            <input type="text" />
          </div> */}
          <div className="req-hld">
            <Textarea
              type="text"
              placeholder="Parcel Description"
              autosize
              minRows={2.5}
              style={{width: '100%'}}
            />
          </div>
          <div className="req-hld" style={{justifyContent: "center", alignContent: "center"}}>
            <button>Send Request</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeRequest;
