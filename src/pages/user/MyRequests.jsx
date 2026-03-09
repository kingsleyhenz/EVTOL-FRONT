import React, { useEffect, useState } from "react";
import UserReqs from "../../components/all-my-requests";
import UserSide from "../../components/userSideBar";
import UserDashLoader from "../../components/user-loader";

const MyRequests = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center bg-[#222222]">
            <UserDashLoader/>
        </div>;
    }
    return(
        <>
            <div className="w-full h-screen flex gap-[2%] bg-[#222222]">
                <UserSide/>
                <div className="w-[80%] h-full">
                    <div className="w-full h-[15%] text-white pt-[1%]">
                        <h2 className="text-2xl font-bold">My Requests</h2>
                    </div>
                    <div className="w-[99%] h-[80%]">
                        <UserReqs/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyRequests