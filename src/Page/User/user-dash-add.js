import React, { useState, useEffect } from "react";
import UserSide from "../../Component/userSideBar";
import '../../Stylesheet/User/user-add.css'
import UserDashLoader from "../../Component/user-loader";

const AddReq=()=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="load-wrp">
            <UserDashLoader />
        </div>;
    }

    return(
        <>
            <div className="user-wrap">
                <UserSide/>
                <div className="add-req-content">
                    
                </div>
            </div>
        </>
    )
}

export default AddReq