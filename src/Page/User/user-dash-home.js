import React, { useState, useEffect } from "react";
import '../../Stylesheet/User/user-dash-home.css'
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
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="load-wrp">
            <UserDashLoader />
        </div>;
    }
    return(
        <>
        
            <div className="user-wrap">
                <UserSide/>
                <div className="main-user-content">
                    <div className="main-dash-head">
                        <div className="dash-date">
                            <p>Friday, 16 August 2024</p>
                            <MdDateRange id="dash-date-i"/>
                        </div>
                        <div className="dash-notif">
                            <NavLink to='/' id="not-link">
                                <IoNotifications id="dash-head-i"/>
                                <p>1 New Notification(s)</p>
                            </NavLink>
                        </div>
                        <div className="dash-user">
                            <p>Welcome Back, Henzy</p>
                            <IoIosPerson id="dash-date-i"/>
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