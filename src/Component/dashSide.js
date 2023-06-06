import React from "react";
import {NavLink} from "react-router-dom"
import '../Stylesheet/dashSide.css';


const SideBar =()=>{ 
    return(
        <>
        <div className="Bar">
        <div className="title-bar">
            <h2>EV-TRANS</h2>
        </div>
            <div className="firstlayer">
            <NavLink to="/">Register Device</NavLink>
            <NavLink to="/load">Load Device</NavLink>
            <NavLink to="/all">All Devices</NavLink>
            <NavLink to="/viewmeds">Medications</NavLink>
            <NavLink to="/viewAvailable">Avalaible EVTOL</NavLink>
            <NavLink to="/viewbattery">History</NavLink>
            </div>
        </div>
        </>
    )
}


export default SideBar