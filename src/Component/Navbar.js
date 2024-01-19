import React from "react";
import '../Stylesheet/User/Navbar.css';
import { GiDeliveryDrone } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import { RiNotification4Line, RiAccountPinCircleLine } from "react-icons/ri";

const Navbar = () => {
    const isAuthenticated = !!localStorage.getItem('auth_token');

    return (
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
                    {isAuthenticated ? (
                        <>
                            <NavLink to='/notifications' id="nav-icon">
                                <RiNotification4Line />
                            </NavLink>
                            <NavLink to='/user-dash' id="nav-icon">
                                <RiAccountPinCircleLine />
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to='/register-account' id="nav-btn">Sign Up</NavLink>
                            <NavLink to='/login' id="nav-log">Login</NavLink>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
