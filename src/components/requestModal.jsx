import React, { useState } from "react";
import axios from "axios";
import { Textarea } from "@mantine/core";
import { toast } from 'react-toastify';
import { BsBoxSeam, BsGeoAlt, BsPersonBoundingBox } from "react-icons/bs";

function RequestMod() {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSubmitEnabled = () => {
    const originValid = Object.values(parcelDetails).every((val) => val.trim() !== "");
    const recipientValid = Object.values(recipientDetails).every((val) => val.trim() !== "");
    const specsValid = Object.values(parcelDimensions).every((val) => val.trim() !== "");
    const descValid = parcelDescription.trim() !== "";
    return originValid && recipientValid && specsValid && descValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmitEnabled()) return;
    
    setIsSubmitting(true);
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
        // Reset states
        setParcelDetails({ country: "", state: "", city: "", address: "" });
        setRecipientDetails({ country: "", state: "", city: "", address: "", name: "", email: "", phone: "" });
        setParcelDimensions({ name: "", width: "", length: "", height: "" });
        setParcelDescription("");
      } else {
        toast.error(response.data.error || "Failed to submit request.");
      }
    } catch (error) {
      console.error("Error in completing request:", error.message);
      toast.error("An error occurred while submitting the request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "bg-gray-50 h-12 w-full border border-gray-200 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all placeholder-gray-400";
  const labelClass = "text-xs font-bold uppercase tracking-widest text-gray-500 pl-2 mb-2 block";
  
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
      
      {/* 1. Parcel Origin */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 text-xl">
             <BsGeoAlt />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#111]">Parcel Origin</h3>
            <p className="text-xs font-medium text-gray-400 mt-1">Where is the parcel currently located?</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className={labelClass}>Country</label>
            <input className={inputClass} type="text" placeholder="e.g. United States" value={parcelDetails.country} onChange={(e) => setParcelDetails({ ...parcelDetails, country: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>State/Region</label>
            <input className={inputClass} type="text" placeholder="e.g. California" value={parcelDetails.state} onChange={(e) => setParcelDetails({ ...parcelDetails, state: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>City</label>
            <input className={inputClass} type="text" placeholder="e.g. San Francisco" value={parcelDetails.city} onChange={(e) => setParcelDetails({ ...parcelDetails, city: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Exact Address</label>
            <input className={inputClass} type="text" placeholder="e.g. 123 Sky Way" value={parcelDetails.address} onChange={(e) => setParcelDetails({ ...parcelDetails, address: e.target.value })} required />
          </div>
        </div>
      </section>

      {/* 2. Recipient Details & Destination */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 text-xl">
             <BsPersonBoundingBox />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#111]">Recipient & Destination</h3>
            <p className="text-xs font-medium text-gray-400 mt-1">Who is receiving it and where?</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className={labelClass}>Full Name</label>
            <input className={inputClass} type="text" placeholder="e.g. Jane Smith" value={recipientDetails.name} onChange={(e) => setRecipientDetails({ ...recipientDetails, name: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input className={inputClass} type="email" placeholder="jane@example.com" value={recipientDetails.email} onChange={(e) => setRecipientDetails({ ...recipientDetails, email: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input className={inputClass} type="tel" placeholder="+1 234 567 8900" value={recipientDetails.phone} onChange={(e) => setRecipientDetails({ ...recipientDetails, phone: e.target.value })} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className={labelClass}>Country</label>
            <input className={inputClass} type="text" placeholder="e.g. United Kingdom" value={recipientDetails.country} onChange={(e) => setRecipientDetails({ ...recipientDetails, country: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>State/Region</label>
            <input className={inputClass} type="text" placeholder="e.g. Greater London" value={recipientDetails.state} onChange={(e) => setRecipientDetails({ ...recipientDetails, state: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>City</label>
            <input className={inputClass} type="text" placeholder="e.g. London" value={recipientDetails.city} onChange={(e) => setRecipientDetails({ ...recipientDetails, city: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Exact Address</label>
            <input className={inputClass} type="text" placeholder="e.g. 45 Tower Bridge Road" value={recipientDetails.address} onChange={(e) => setRecipientDetails({ ...recipientDetails, address: e.target.value })} required />
          </div>
        </div>
      </section>

      {/* 3. Parcel Specifications */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
         <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 text-xl">
             <BsBoxSeam />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#111]">Parcel Specifications</h3>
            <p className="text-xs font-medium text-gray-400 mt-1">Details about the item itself.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className={labelClass}>Parcel Name</label>
            <input className={inputClass} type="text" placeholder="e.g. Medical Supplies" value={parcelDimensions.name} onChange={(e) => setParcelDimensions({ ...parcelDimensions, name: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Width (cm)</label>
            <input className={inputClass} type="number" placeholder="0.0" value={parcelDimensions.width} onChange={(e) => setParcelDimensions({ ...parcelDimensions, width: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Length (cm)</label>
            <input className={inputClass} type="number" placeholder="0.0" value={parcelDimensions.length} onChange={(e) => setParcelDimensions({ ...parcelDimensions, length: e.target.value })} required />
          </div>
          <div>
            <label className={labelClass}>Height (cm)</label>
            <input className={inputClass} type="number" placeholder="0.0" value={parcelDimensions.height} onChange={(e) => setParcelDimensions({ ...parcelDimensions, height: e.target.value })} required />
          </div>
        </div>
        
        <div>
           <label className={labelClass}>Additional Description & Handling Instructions</label>
           <Textarea
              resize="vertical"
              placeholder="Briefly describe the contents and any specific handling instructions..."
              className="w-full"
              styles={{
                input: {
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '1rem',
                  color: '#111',
                  minHeight: '120px',
                  padding: '1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                }
              }}
              value={parcelDescription}
              onChange={(e) => setParcelDescription(e.target.value)}
              required
            />
        </div>
      </section>

      {/* Submit Action */}
      <div className="w-full flex justify-end pb-10">
         <button 
            type="submit" 
            disabled={!isSubmitEnabled() || isSubmitting}
            className="py-4 px-12 text-white font-bold text-[15px] bg-black hover:bg-[#ff4500] hover:shadow-lg hover:shadow-[#ff4500]/20 transition-all rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting Request..." : "Submit Secure Request"}
         </button>
      </div>

    </form>
  );
}

export default RequestMod;
