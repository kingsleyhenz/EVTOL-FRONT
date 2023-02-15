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
            <NavLink to="/Home">Register</NavLink>
            <NavLink to="/load">Load</NavLink>
            <NavLink to="/all">All</NavLink>
            <NavLink to="/viewmeds">Check Medications</NavLink>
            <NavLink to="/viewAvailable">Check Avalaible EVTOL</NavLink>
            <NavLink to="/viewbattery">Check Battery Level</NavLink>
            </div>
        </div>
        </>
    )
}


export default SideBar