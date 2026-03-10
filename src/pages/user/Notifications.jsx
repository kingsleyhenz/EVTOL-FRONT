import React, { useEffect, useState } from "react";
import UserSide from "../../components/userSideBar";
import UserDashLoader from "../../components/user-loader";
import { AiFillBell, AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineStop } from "react-icons/ai";

const initialNotifications = [
    {
        id: 1,
        title: "Request Approved",
        message: "Your parcel request to London, UK has been approved and is preparing for dispatch.",
        time: "10 minutes ago",
        read: false,
        type: "success",
    },
    {
        id: 2,
        title: "Delivery Update",
        message: "Drone #SC-492 has picked up your medical supplies request.",
        time: "2 hours ago",
        read: false,
        type: "info",
    },
    {
        id: 3,
        title: "Request Rejected",
        message: "Your parcel request to California was rejected due to excess weight limitations.",
        time: "1 day ago",
        read: true,
        type: "error",
    },
    {
        id: 4,
        title: "Welcome to SkyCargo",
        message: "Your account has been successfully verified. You can now start making drone delivery requests.",
        time: "2 days ago",
        read: true,
        type: "info",
    }
];

const Notifications = () => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulate fetch
        const timer = setTimeout(() => {
            setNotifications(initialNotifications);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({...n, read: true})));
    };

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-gray-50">
                <UserDashLoader />
            </div>
        );
    }

    const unreadCount = notifications.filter(n => !n.read).length;

    const getIcon = (type) => {
        switch(type) {
            case 'success': return <AiOutlineCheckCircle className="text-green-500 text-2xl" />;
            case 'error': return <AiOutlineStop className="text-red-500 text-2xl" />;
            default: return <AiOutlineClockCircle className="text-blue-500 text-2xl" />;
        }
    };

    return (
        <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
            <UserSide />
            <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-[#111] flex items-center gap-3">
                            Notifications
                            {unreadCount > 0 && (
                                <span className="bg-[#ff4500] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    {unreadCount} New
                                </span>
                            )}
                        </h2>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed mt-1">
                            Stay updated with your drone deliveries and account alerts.
                        </p>
                    </div>
                    {unreadCount > 0 && (
                        <button 
                            onClick={markAllAsRead}
                            className="text-sm font-bold text-gray-500 hover:text-black transition-colors bg-white border border-gray-200 px-4 py-2 rounded-xl"
                        >
                            Mark all as read
                        </button>
                    )}
                </div>

                <div className="w-full flex-1 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col gap-4 overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                            <AiFillBell className="text-4xl text-gray-200" />
                            <p className="text-sm font-medium">You have no notifications yet.</p>
                        </div>
                    ) : (
                        notifications.map((notif) => (
                            <div 
                                key={notif.id} 
                                className={`w-full p-5 rounded-2xl border transition-all flex items-start gap-5 ${notif.read ? 'bg-white border-gray-100' : 'bg-[#ff4500]/5 border-[#ff4500]/20'}`}
                            >
                                <div className={`w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center ${notif.read ? 'bg-gray-50' : 'bg-white shadow-sm'}`}>
                                    {getIcon(notif.type)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className={`text-[15px] ${notif.read ? 'font-bold text-gray-700' : 'font-black text-[#111]'}`}>
                                            {notif.title}
                                        </h3>
                                        <span className="text-xs font-semibold text-gray-400">{notif.time}</span>
                                    </div>
                                    <p className={`text-sm ${notif.read ? 'text-gray-500 font-medium' : 'text-gray-700 font-semibold'} leading-relaxed max-w-3xl`}>
                                        {notif.message}
                                    </p>
                                </div>
                                {!notif.read && (
                                    <div className="w-2.5 h-2.5 bg-[#ff4500] rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(255,69,0,0.5)]"></div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
