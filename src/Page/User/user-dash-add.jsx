import React, { useState, useEffect } from "react";
import UserSide from "../../Component/userSideBar";
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
      <div className="w-full h-screen flex justify-center items-center bg-[#222222]">
        <UserDashLoader />
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen flex gap-[2%] bg-[#222222]">
        <UserSide />
        <div className="w-[80%] h-full flex flex-col gap-4 p-4">
          <div className="w-full h-[10%] flex items-center text-white">
            <h2 className="text-2xl font-bold">Make A Request</h2>
          </div>
          <div className="w-full h-[15%] text-white pr-[1%]">
            <p>
              Fill in the fields below to make a parcel request. Please note not all requests will be accepted due to factors such as excess weight of parcel and unavailable devices.
            </p>
          </div>
          <div className="w-full h-[70%]">
            <RequestMod/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReq;
