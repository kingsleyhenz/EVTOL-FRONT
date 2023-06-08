import React from "react";
import {NavLink} from "react-router-dom"
import '../Stylesheet/dashSide.css';
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {GrDeploy} from 'react-icons/gr'
import {BsClipboardData} from 'react-icons/bs'
import {SiDatabricks} from 'react-icons/si'
import {MdOutlineCropFree} from 'react-icons/md'
import {GrHistory} from 'react-icons/gr'


const SideBar =()=>{ 
    return(
        <>
        <div className="Bar">
        <div className="title-bar">
            <h2>EV-TRANS</h2>
        </div>
            <div className="firstlayer">
            <NavLink to="/">
                <p id="dp">Register Device</p>
                <AiOutlineAppstoreAdd id="dashi"/>
                </NavLink>
            <NavLink to="/load">
                <p id="dp">Load Device</p>
                <GrDeploy id="dashi"/>
                </NavLink>
            <NavLink to="/all">
                <p id="dp">All Devices</p>
                <BsClipboardData id="dashi"/>
            </NavLink>
            <NavLink to="/viewmeds">
               <p id="dp"> Medications</p>
               <SiDatabricks id="dashi"/>
                </NavLink>
            <NavLink to="/viewAvailable">
                <p id="dp">Avalaible EVTOL</p>
                <MdOutlineCropFree id="dashi"/>
            </NavLink>
            <NavLink to="/viewbattery">
                <p id="dp">History</p>
                <GrHistory id="dashi"/>
            </NavLink>
            </div>
        </div>
        </>
    )
}


export default SideBar