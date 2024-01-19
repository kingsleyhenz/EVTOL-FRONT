import React from "react";
import '../../Stylesheet/User/user-dash-home.css'
import UserSide from './../../Component/userSideBar';

const UserHome=()=>{
    return(
        <>
            <div className="user-wrap">
                <UserSide/>
            </div>
        </>
    )
}

export default UserHome