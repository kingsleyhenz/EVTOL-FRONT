import React from "react";
import {NavLink} from "react-router-dom"
import '../Stylesheet/dashSide.css';
import { IoCreateOutline, IoDownloadOutline } from "react-icons/io5";
import {BsClipboardData} from 'react-icons/bs'
import {SiDatabricks} from 'react-icons/si'
import {MdOutlineCropFree} from 'react-icons/md'
import { GiDeliveryDrone } from "react-icons/gi";

const SideBar =()=>{ 
    return(
        <>
        <div className="Bar">
        <div className="title-bar">
            <GiDeliveryDrone/>
        </div>
            <div className="firstlayer">
            <NavLink to="/">
                <IoCreateOutline id="dashi"/>
                <p id="dp">Device Overview</p>
                </NavLink>
            <NavLink to="/load">
                <IoDownloadOutline id="dashi"/>
                <p id="dp">Register & Load</p>
                </NavLink>
            <NavLink to="/all">
                <BsClipboardData id="dashi"/>
                <p id="dp">All Devices</p>
            </NavLink>
            <NavLink to="/requests">
               <SiDatabricks id="dashi"/>
               <p id="dp">All Requests</p>
                </NavLink>
            <NavLink to="/viewbattery">
                
                <p id="dp">History</p>
            </NavLink>
            </div>
        </div>
        </>
    )
}


export default SideBar