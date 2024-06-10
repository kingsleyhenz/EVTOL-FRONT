import React from "react";
import '../Stylesheet/User/Navbar.css'
import { GiDeliveryDrone } from 'react-icons/gi';
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
            <nav>
                <div className="nav-t">
                    <p>SkyCargo</p>
                </div>
                <div className="nav-o">
                    <NavLink to='/' id="nav-l">Home</NavLink>
                    <NavLink to='/about' id="nav-l">About</NavLink>
                    <NavLink to='/' id="nav-l">Contact Us</NavLink>
                    <NavLink to='/' id="nav-l">Features</NavLink>
                </div>
                <div className="nav-r">
                    <NavLink to='/register-account' id="nav-btn">Sign Up</NavLink>
                    <NavLink to='/login' id="nav-log">Login</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar