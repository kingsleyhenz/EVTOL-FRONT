import React, { useState, useEffect } from "react";
import UserSide from "../../components/userSideBar";
import UserDashLoader from "../../components/user-loader";
import RequestMod from "../../components/requestModal";

const AddRequest = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50">
        <UserDashLoader />
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
        <UserSide />
        <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-2xl font-black tracking-tight text-[#111]">Make A Request</h1>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-3xl border-l-2 border-[#ff4500] pl-4">
              Fill in the fields below to make a parcel request. Please note not all requests will be accepted due to factors such as excess weight of parcel and unavailable devices.
            </p>
          </div>
          <div className="w-full flex-1 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <RequestMod/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRequest;
