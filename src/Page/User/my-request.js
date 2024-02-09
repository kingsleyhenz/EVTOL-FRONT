import React, { useEffect, useState } from "react";
import UserReqs from "../../Component/all-my-requests";
import UserSide from "../../Component/userSideBar";
import '../../Stylesheet/User/my-request.css'
import UserDashLoader from './../../Component/user-loader';

const MyRequest=()=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="load-wrp">
            <UserDashLoader/>
        </div>;
    }
    return(
        <>
            <div className="user-wrap">
                <UserSide/>
                <div className="req-con">
                    <div className="req-con-hd">
                        <h2>My Requests</h2>
                    </div>
                    <div className="req-tab-con">
                        <UserReqs/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyRequest