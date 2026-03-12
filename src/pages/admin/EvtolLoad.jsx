import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SideBar from "../../components/dashSide";
import { BsFlag, BsPlusCircle, BsShieldCheck } from "react-icons/bs";

const Load = () => {
    const [evtol, setEvtol] = useState({
        serialNo: "",
        model: "Lightweight",
        weight: "",
        battery: "100",
        state: "IDLE",
    });

    const [loadInfo, setLoadInfo] = useState({
        requestId: "",
        droneId: "",
    });

    const [devices, setDevices] = useState([]);
    const baseUrl = `https://droneservice.onrender.com`;

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/v1/evtol/admin/all`);
                setDevices(response.data.data.filter(d => d.state === "IDLE"));
            } catch (error) {
                console.error(error);
            }
        };
        fetchDevices();
    }, [baseUrl]);

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setEvtol(prev => {
            const updated = { ...prev, [name]: value };
            if (name === 'weight') {
                const w = parseInt(value);
                if (w <= 100) updated.model = "Lightweight";
                else if (w <= 200) updated.model = "Middleweight";
                else if (w <= 400) updated.model = "Cruiserweight";
                else updated.model = "Heavyweight";
            }
            return updated;
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        // Generate a random serial if empty
        const finalEvtol = { ...evtol, serialNo: evtol.serialNo || `SKY-${Math.random().toString(36).substring(7).toUpperCase()}` };
        
        try {
            const res = await axios.post(`${baseUrl}/api/v1/evtol/admin/Register`, finalEvtol);
            if (res.data.status === "Success") {
                Swal.fire({ title: "Registered!", text: "Drone added to fleet.", icon: "success", timer: 2000 });
                setEvtol({ serialNo: "", model: "Lightweight", weight: "", battery: "100", state: "IDLE" });
            }
        } catch (error) {
            Swal.fire("Error", error.response?.data?.message || "Failed to register drone", "error");
        }
    };

    const handleDeploy = (e) => {
        e.preventDefault();
        Swal.fire({ title: "Deploying...", text: "Checking loading capacity and safety protocols.", icon: "info", timer: 2000 });
        // Implement backend deploy logic here
    };

    const inputClass = "bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all placeholder-gray-400";
    const labelClass = "text-xs font-bold uppercase tracking-widest text-gray-500 pl-2 mb-2 block";

    return (
        <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
            <SideBar />
            <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                <div className="w-full">
                    <h1 className="text-2xl font-black tracking-tight text-[#111]">Register & Load</h1>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mt-1">Expand the fleet or deploy drones for active delivery missions.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* Register Fleet Section */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-8">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 text-xl">
                                <BsPlusCircle />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-[#111]">Register New Drone</h3>
                                <p className="text-xs font-medium text-gray-400 mt-1">Add a new device to the SkyCargo fleet.</p>
                            </div>
                        </div>

                        <form onSubmit={handleRegister} className="flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Serial Number (Opt)</label>
                                    <input name="serialNo" className={inputClass} type="text" placeholder="Auto-generated if empty" value={evtol.serialNo} onChange={handleRegisterChange} />
                                </div>
                                <div>
                                    <label className={labelClass}>Max Weight (kg)</label>
                                    <input name="weight" className={inputClass} type="number" placeholder="500 max" value={evtol.weight} onChange={handleRegisterChange} required />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Device Model Classification</label>
                                <div className="bg-gray-50 h-12 w-full border border-gray-100 rounded-2xl flex items-center px-4 text-sm font-bold text-[#ff4500]">
                                    {evtol.model}
                                </div>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-full bg-black text-white font-bold text-sm hover:bg-[#ff4500] transition-colors shadow-lg shadow-black/5 mt-2">
                                Add to Fleet
                            </button>
                        </form>
                    </div>

                    {/* Load/Deploy Section */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-8">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#ff4500]/5 flex items-center justify-center text-[#ff4500] text-xl">
                                <BsFlag />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-[#111]">Deploy Mission</h3>
                                <p className="text-xs font-medium text-gray-400 mt-1">Assign a request to an available drone.</p>
                            </div>
                        </div>

                        <form onSubmit={handleDeploy} className="flex flex-col gap-6">
                            <div>
                                <label className={labelClass}>Request ID</label>
                                <input className={inputClass} type="text" placeholder="Enter Request ID e.g. #6721" value={loadInfo.requestId} onChange={(e) => setLoadInfo({...loadInfo, requestId: e.target.value})} required />
                            </div>
                            <div>
                                <label className={labelClass}>Select Available Fleet</label>
                                <select className={inputClass} value={loadInfo.droneId} onChange={(e) => setLoadInfo({...loadInfo, droneId: e.target.value})} required>
                                    <option value="">Choose an available drone</option>
                                    {devices.map(d => (
                                        <option key={d._id} value={d._id}>{d.serialNo} ({d.model} - {d.battery}%)</option>
                                    ))}
                                    {devices.length === 0 && <option disabled>No idle drones available</option>}
                                </select>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-full bg-[#ff4500] text-white font-bold text-sm hover:bg-black transition-colors shadow-lg shadow-[#ff4500]/20 mt-2 flex items-center justify-center gap-2">
                                <BsShieldCheck className="text-lg" />
                                Initiate Deployment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Load;
