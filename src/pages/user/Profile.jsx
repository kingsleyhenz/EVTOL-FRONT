import React, { useEffect, useState } from "react";
import UserSide from "../../components/userSideBar";
import UserDashLoader from "../../components/user-loader";
import { AiOutlineMail, AiOutlinePhone, AiOutlineCamera, AiOutlineLock } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";

const initialProfile = {
    firstName: "Johnny",
    lastName: "Doe",
    email: "johnny.doe@example.com",
    phone: "+1 234 567 8900",
    role: "User",
    address: "123 Sky Way, California, US",
};

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Mock save
        setIsEditing(false);
    };

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-gray-50">
                <UserDashLoader />
            </div>
        );
    }

    const inputClass = "bg-gray-50 h-12 w-full border border-gray-200 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black text-[#111] px-4 text-sm font-medium transition-all";
    const labelClass = "text-xs font-bold uppercase tracking-widest text-gray-400 pl-2 mb-2 block";

    return (
        <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
            <UserSide />
            <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-[#111]">My Profile</h2>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed mt-1">
                            Manage your account information and preferences.
                        </p>
                    </div>
                </div>

                <div className="w-full flex-1 flex flex-col xl:flex-row gap-8">
                    {/* Left Column: Avatar & Quick Info */}
                    <div className="w-full xl:w-1/3 flex flex-col gap-6">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center">
                            <div className="relative group cursor-pointer mb-6">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 bg-gray-200 flex items-center justify-center relative">
                                    <span className="text-4xl font-black text-gray-400">
                                        {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                                    </span>
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <AiOutlineCamera className="text-white text-3xl" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-[#111]">{profile.firstName} {profile.lastName}</h3>
                            <p className="text-sm font-bold text-[#ff4500] tracking-widest uppercase mt-1">{profile.role}</p>
                            
                            <div className="w-full flex flex-col gap-4 mt-8 text-left">
                                <div className="flex items-center gap-4 text-gray-500">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex justify-center items-center text-xl text-gray-400">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="flex-1 overflow-hidden text-ellipsis">
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</p>
                                        <p className="text-sm font-medium text-[#111]">{profile.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-500">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex justify-center items-center text-xl text-gray-400">
                                        <AiOutlinePhone />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</p>
                                        <p className="text-sm font-medium text-[#111]">{profile.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-500">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex justify-center items-center text-xl text-gray-400">
                                        <BsPersonBadge />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Account</p>
                                        <p className="text-sm font-medium text-[#111]">Verified User</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Settings Outline */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center justify-between cursor-pointer hover:border-black transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex justify-center items-center text-xl">
                                    <AiOutlineLock />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#111]">Password</p>
                                    <p className="text-xs font-medium text-gray-400">Change your password</p>
                                </div>
                            </div>
                            <span className="text-gray-300 font-bold tracking-widest">•••</span>
                        </div>
                    </div>

                    {/* Right Column: Editable Form */}
                    <div className="w-full xl:w-2/3 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                            <div>
                                <h3 className="text-lg font-black text-[#111]">Personal Details</h3>
                                <p className="text-xs font-medium text-gray-400 mt-1">Update your identifying info here.</p>
                            </div>
                            <button 
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                className={`py-2 px-6 rounded-full font-bold text-sm transition-all ${isEditing ? 'bg-[#ff4500] text-white hover:bg-black hover:shadow-lg shadow-[#ff4500]/20' : 'bg-gray-100 text-[#111] hover:bg-gray-200'}`}
                            >
                                {isEditing ? "Save Changes" : "Edit Profile"}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className={labelClass}>First Name</label>
                                <input 
                                    className={inputClass} 
                                    type="text" 
                                    name="firstName" 
                                    value={profile.firstName} 
                                    onChange={handleChange} 
                                    disabled={!isEditing} 
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Last Name</label>
                                <input 
                                    className={inputClass} 
                                    type="text" 
                                    name="lastName" 
                                    value={profile.lastName} 
                                    onChange={handleChange} 
                                    disabled={!isEditing} 
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Email Address</label>
                                <input 
                                    className={`${inputClass} ${!isEditing ? 'bg-gray-50' : ''}`} 
                                    type="email" 
                                    name="email" 
                                    value={profile.email} 
                                    onChange={handleChange} 
                                    disabled={!isEditing} 
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Phone Number</label>
                                <input 
                                    className={inputClass} 
                                    type="tel" 
                                    name="phone" 
                                    value={profile.phone} 
                                    onChange={handleChange} 
                                    disabled={!isEditing} 
                                />
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Full Home/Work Address</label>
                            <input 
                                className={inputClass} 
                                type="text" 
                                name="address" 
                                value={profile.address} 
                                onChange={handleChange} 
                                disabled={!isEditing} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
