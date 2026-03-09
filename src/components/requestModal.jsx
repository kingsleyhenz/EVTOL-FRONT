import React, { useState } from "react";
import axios from "axios";
import { Tabs, rem, Textarea, Transition } from "@mantine/core";
import { toast } from 'react-toastify';

function RequestMod() {
  const iconStyle = { width: rem(12), height: rem(12) };

  const tabValues = ["first", "second", "third", "fourth", "fifth"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [parcelDetails, setParcelDetails] = useState({
    country: "",
    state: "",
    city: "",
    address: "",
  });

  const [recipientDetails, setRecipientDetails] = useState({
    country: "",
    state: "",
    city: "",
    address: "",
    name: "",
    email: "",
    phone: "",
  });

  const [parcelDimensions, setParcelDimensions] = useState({
    name: "",
    width: "",
    length: "",
    height: "",
  });

  const [parcelDescription, setParcelDescription] = useState("");

  const isNextEnabled = () => {
    switch (currentIndex) {
      case 0:
        return Object.values(parcelDetails).every((value) => value.trim() !== "");
      case 1:
        return Object.values(recipientDetails).slice(0, 4).every((value) => value.trim() !== "");
      case 2:
        return Object.values(recipientDetails).slice(4).every((value) => value.trim() !== "");
      case 3:
        return Object.values(parcelDimensions).every((value) => value.trim() !== "");
      case 4:
        return parcelDescription.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isNextEnabled()) {
      if (currentIndex < tabValues.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        handleComplete();
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleComplete = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      const payload = {
        recipientName: recipientDetails.name,
        recipientEmail: recipientDetails.email,
        recipientPhone: recipientDetails.phone,
        parcelCountry: parcelDetails.country,
        parcelState: parcelDetails.state,
        parcelCity: parcelDetails.city,
        parcelAddress: parcelDetails.address,
        recipientCountry: recipientDetails.country,
        recipientState: recipientDetails.state,
        recipientCity: recipientDetails.city,
        recipientAddress: recipientDetails.address,
        parcelWidth: parcelDimensions.width,
        parcelHeight: parcelDimensions.height,
        parcelLength: parcelDimensions.length,
        item: parcelDimensions.name,
        description: parcelDescription,
      };
      const baseUrl = 'https://droneservice.onrender.com'

      const response = await axios.post(`${baseUrl}/api/v1/request/send-request`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.status === 201){
        toast.success("Request Sent Successfully. Pending Acceptance...⏳");
        setParcelDetails({
          country: "",
          state: "",
          city: "",
          address: "",
        });
        setRecipientDetails({
          country: "",
          state: "",
          city: "",
          address: "",
          name: "",
          email: "",
          phone: "",
        });
        setParcelDimensions({
          name: "",
          width: "",
          length: "",
          height: "",
        });
        setParcelDescription("");
        setCurrentIndex(0);
      }else{
        toast.error(response.data.error)
      }
    } catch (error) {
      console.error("Error in completing request:", error.message);
    }
  };

  return (
    <Tabs
      color="#ff4500"
      variant="pills"
      radius="sm"
      value={tabValues[currentIndex]}
      orientation="vertical"
      className="w-full h-auto flex flex-col-reverse items-center p-4 border-none"
      placement="right"
    >
      <Tabs.List className="h-auto w-full flex flex-row justify-center gap-4 mt-8 border-none">
      {currentIndex < tabValues.length - 1 ? (
            <button key="next" className="py-2 px-8 text-white text-[15px] bg-[#ff4500] hover:bg-[#1a1a1a] transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleNext} disabled={!isNextEnabled()}>
              Next
            </button>
          ) : (
            <button key="complete" className="py-2 px-8 text-white text-[15px] bg-[#ff4500] hover:bg-[#1a1a1a] transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleComplete} disabled={!isNextEnabled()}>
              Complete
            </button>
          )}
          <button key="back" className="py-2 px-8 text-white text-[15px] bg-[#ff4500] hover:bg-[#1a1a1a] transition-colors rounded-md" onClick={handleBack}>
            Back
          </button>
      </Tabs.List>

      <div className="w-full flex justify-center items-center min-h-[150px]">
      <Transition
        mounted={currentIndex === 0}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="first" className="flex justify-between w-[95%] pt-[2%]" style={styles}>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Country</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Parcel Country"
                value={parcelDetails.country}
                onChange={(e) => setParcelDetails({ ...parcelDetails, country: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel State</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Parcel State"
                value={parcelDetails.state}
                onChange={(e) => setParcelDetails({ ...parcelDetails, state: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel City</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Parcel City"
                value={parcelDetails.city}
                onChange={(e) => setParcelDetails({ ...parcelDetails, city: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Address</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Parcel Address"
                value={parcelDetails.address}
                onChange={(e) => setParcelDetails({ ...parcelDetails, address: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 1}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="second" className="flex justify-between w-[95%] pt-[2%]" style={styles}>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient Country</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient Country"
                value={recipientDetails.country}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, country: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient State</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient State"
                value={recipientDetails.state}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, state: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient City</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient City"
                value={recipientDetails.city}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, city: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient Address</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient Address"
                value={recipientDetails.address}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, address: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 2}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="third" className="flex justify-between w-[95%] pt-[2%]" style={styles}>
            <div className="w-[30%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient Name</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient Name"
                value={recipientDetails.name}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, name: e.target.value })}
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient Email</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient Email"
                value={recipientDetails.email}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, email: e.target.value })}
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Recipient Phone</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Recipient Phone"
                value={recipientDetails.phone}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, phone: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 3}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="fourth" className="flex justify-between w-[95%] pt-[2%]" style={styles}>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Name</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="text"
                placeholder="Parcel Name"
                value={parcelDimensions.name}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, name: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Width</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="number"
                placeholder="Parcel Width"
                value={parcelDimensions.width}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, width: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Length</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="number"
                placeholder="Parcel Length"
                value={parcelDimensions.length}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, length: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Height</label>
              <input
                className="bg-transparent h-10 w-full border border-[#555555] rounded-[3px] outline-none text-white px-2 text-[13px] placeholder-gray-500"
                type="number"
                placeholder="Parcel Height"
                value={parcelDimensions.height}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, height: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 4}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="fifth" className="flex justify-center w-[95%] pt-[2%]" style={styles}>
            <div className="w-[80%] flex flex-col gap-2">
              <label className="text-[13px] text-white">Parcel Description</label>
              <Textarea
                resize="vertical"
                placeholder="Parcel Description"
                className="w-full text-white"
                styles={{
                  input: {
                    backgroundColor: 'transparent',
                    border: '1px solid #555555',
                    color: 'white',
                    minHeight: '150px'
                  }
                }}
                value={parcelDescription}
                onChange={(e) => setParcelDescription(e.target.value)}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>
      </div>
    </Tabs>
  );
}

export default RequestMod;
