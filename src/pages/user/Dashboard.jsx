import React, { useState, useEffect } from "react";
import UserSide from "../../components/userSideBar";
import { IoNotifications } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { ReportCards, ReportTable } from "../../components/user-dash-comps";
import UserDashLoader from "../../components/user-loader";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center bg-gray-50">
            <UserDashLoader />
        </div>;
    }
    return(
        <>
            <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
                <UserSide/>
                <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                    {/* Header */}
                    <div className="w-full flex items-center justify-between text-[#111]">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-black tracking-tight">Dashboard</h1>
                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1 font-medium">
                                <MdDateRange className="text-lg text-[#ff4500]"/>
                                <p>Friday, 16 August 2026</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <NavLink to='/' className="flex py-3 px-6 bg-white border border-gray-200 rounded-full text-[#111] items-center gap-3 hover:border-black hover:shadow-md transition-all">
                                <IoNotifications className="text-xl"/>
                                <p className="text-sm font-bold">1 New Notification</p>
                            </NavLink>
                        </div>
                        
                        <div className="flex items-center gap-4 bg-white border border-gray-200 py-2 px-4 rounded-full shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center text-[#ff4500]">
                                <IoIosPerson className="text-xl"/>
                            </div>
                            <div className="flex flex-col pr-2">
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Welcome Back</p>
                                <p className="text-sm font-bold">Kingsley Henz</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <ReportCards/>
                        <ReportTable/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard