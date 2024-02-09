import React, { useState, useEffect } from "react";
import UserSide from "../../Component/userSideBar";
import "../../Stylesheet/User/user-add.css";
import UserDashLoader from "../../Component/user-loader";
import RequestMod from "../../Component/requestModal";

const AddReq = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="load-wrp">
        <UserDashLoader />
      </div>
    );
  }

  return (
    <>
      <div className="user-wrap">
        <UserSide />
        <div className="add-req-content">
          <div className="main-dash-head">
            <h2>Make A Request</h2>
          </div>
          <div className="add-req-hd">
            <p>
              Fill in the fields below to make a parcel request. Please note not all requests will be accepted due to factors such as excess weight of parcel and unavailable devices.
            </p>
          </div>
          <div className="add-tab">
            <RequestMod/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReq;
