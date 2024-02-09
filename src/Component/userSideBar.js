import React from "react";
import { NavLink } from "react-router-dom";
import "../Stylesheet/User/user-bar.css";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiStorkDelivery } from "react-icons/gi";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";
import { RiHomeFill } from "react-icons/ri";
const UserSide = () => {
  return (
    <>
      <div className="user-bar">
        <div className="user-bar-head">
          <GiDeliveryDrone id="user-head-i" />
          <h2>SkyCargo</h2>
        </div>
        <div className="user-opts"> 
         <NavLink to="/user-dash" id="user-links">
            <RiHomeFill id="user-i"/>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to="/add-req" id="user-links">
            <GiStorkDelivery id="user-i"/>
            <p>Add Request</p>
            </NavLink>
          <NavLink to="/my-requests" id="user-links">
            <AiFillDatabase id="user-i"/>
            <p>My Requests</p>
          </NavLink>
          <NavLink to="/" id="user-links">
            <AiFillMessage id="user-i" />
            <p>Notifications</p>
          </NavLink>
          <NavLink to="/" id="user-links">
            <MdManageAccounts id="user-i"/>
             <p>Profile</p>
          </NavLink>
          <NavLink to="/" id="user-links">
            <AiOutlineAntDesign id="user-i"/>
            <p>Sign Out</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserSide;
