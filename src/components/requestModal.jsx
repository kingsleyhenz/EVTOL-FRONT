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
            <button key="next" className="py-3 px-10 text-white font-bold text-sm bg-black hover:bg-[#ff4500] transition-colors rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-md" onClick={handleNext} disabled={!isNextEnabled()}>
              Next Step
            </button>
          ) : (
            <button key="complete" className="py-3 px-10 text-white font-bold text-sm bg-[#ff4500] hover:bg-black transition-colors rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-[#ff4500]/20" onClick={handleComplete} disabled={!isNextEnabled()}>
              Complete Request
            </button>
          )}
          <button key="back" className="py-3 px-10 text-[#111] font-bold text-sm bg-gray-100 hover:bg-gray-200 transition-colors rounded-full disabled:opacity-50" onClick={handleBack} disabled={currentIndex === 0}>
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
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Country</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. United States"
                value={parcelDetails.country}
                onChange={(e) => setParcelDetails({ ...parcelDetails, country: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel State</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. California"
                value={parcelDetails.state}
                onChange={(e) => setParcelDetails({ ...parcelDetails, state: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel City</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. San Francisco"
                value={parcelDetails.city}
                onChange={(e) => setParcelDetails({ ...parcelDetails, city: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Address</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. 123 Sky Way"
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
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient Country</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. United Kingdom"
                value={recipientDetails.country}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, country: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient State</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. Greater London"
                value={recipientDetails.state}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, state: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient City</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. London"
                value={recipientDetails.city}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, city: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient Address</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. 45 Tower Bridge"
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
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient Name</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. Jane Smith"
                value={recipientDetails.name}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, name: e.target.value })}
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient Email</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="jane.smith@example.com"
                value={recipientDetails.email}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, email: e.target.value })}
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Recipient Phone</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="+1 234 567 8900"
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
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Name</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="text"
                placeholder="e.g. Medical Supplies"
                value={parcelDimensions.name}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, name: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Width (cm)</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="number"
                placeholder="0.0"
                value={parcelDimensions.width}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, width: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Length (cm)</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="number"
                placeholder="0.0"
                value={parcelDimensions.length}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, length: e.target.value })}
              />
            </div>
            <div className="w-[22%] flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Height (cm)</label>
              <input
                className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all"
                type="number"
                placeholder="0.0"
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
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 pl-2">Parcel Description & Custom Instructions</label>
              <Textarea
                resize="vertical"
                placeholder="Briefly describe the contents and any handling instructions..."
                className="w-full text-[#111]"
                styles={{
                  input: {
                    backgroundColor: '#f9fafb',
                    border: '1px solid #f3f4f6',
                    borderRadius: '1rem',
                    color: '#111',
                    minHeight: '150px',
                    padding: '1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
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
