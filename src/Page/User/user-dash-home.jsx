import React, { useState, useEffect } from "react";
import UserSide from './../../Component/userSideBar';
import { IoNotifications } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { ReportCards, ReportTable } from "../../Component/user-dash-comps";
import UserDashLoader from "../../Component/user-loader";

const UserHome=()=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center bg-[#222222]">
            <UserDashLoader />
        </div>;
    }
    return(
        <>
            <div className="w-full h-screen flex gap-[2%] bg-[#222222]">
                <UserSide/>
                <div className="w-[80%] h-full flex flex-col gap-[5%]">
                    <div className="w-[99%] h-[10%] flex items-center justify-between text-white">
                        <div className="w-[20%] h-full flex items-center gap-[2%]">
                            <p className="text-[15px]">Friday, 16 August 2024</p>
                            <MdDateRange className="text-[23px] mb-[1px]"/>
                        </div>
                        <div className="w-[25%] h-full flex items-center">
                            <NavLink to='/' className="w-full h-[60%] bg-[#161616] rounded-[40px] px-[10px] flex text-white items-center no-underline gap-[3%] hover:bg-black transition-all duration-400 ease-in-out">
                                <IoNotifications className="text-[20px]"/>
                                <p className="mt-[5px]">1 New Notification(s)</p>
                            </NavLink>
                        </div>
                        <div className="w-[20%] h-full flex items-center gap-[2%]">
                            <p>Welcome Back, Henzy</p>
                            <IoIosPerson className="text-[23px] mb-[1px]"/>
                        </div>
                    </div>
                    <ReportCards/>
                    <ReportTable/>
                </div>
            </div>
        </>
    )
}

export default UserHome