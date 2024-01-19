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
    }, 5000);
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
              Welcome to the Make a Request page, where you can easily submit
              your request by providing the necessary details in the appropriate
              fields. Please take a moment to ensure that all information is
              accurately filled out, as this will help us process your request
              promptly and efficiently.
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
