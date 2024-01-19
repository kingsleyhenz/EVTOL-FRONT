import React from "react";
import { NavLink } from "react-router-dom";
import "../Stylesheet/User/user-bar.css";
import { GiDeliveryDrone } from "react-icons/gi";

const UserSide = () => {
  return (
    <>
      <div className="user-bar">
        <div className="user-bar-head">
          <GiDeliveryDrone id="user-head-i" />
        </div>
        <div className="user-opts">
          <NavLink to="/" id="user-links">Add Request</NavLink>
          <NavLink to="/" id="user-links">My Requests</NavLink>
          <NavLink to="/" id="user-links">Notifications</NavLink>
          <NavLink to="/" id="user-links">Profile</NavLink>
          <NavLink to="/" id="user-links">Sign Out</NavLink>
        </div>
      </div>
    </>
  );
};

export default UserSide;
