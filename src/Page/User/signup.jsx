import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GiDeliveryDrone } from "react-icons/gi";
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsArrowRight } from "react-icons/bs";
import signupBg from "../../assets/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation.jpg";

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        phoneNo: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const baseUrl = `https://droneservice.onrender.com`

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/api/v1/user/create-account`, formData);
            if (response.status === 201) {
                toast.success(response.data.message || "Account created! 🚀");
                navigate('/login');
            } else {
                toast.error(response.data.message || "Registration failed");
            }
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || 'Something went wrong');
            } else {
                toast.error('Connection error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-screen overflow-hidden flex font-['Poppins'] bg-white">
            {/* Left Side: Branding */}
            <div className="hidden lg:flex lg:w-[40%] xl:w-[45%] h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all z-10"></div>
                <img src={signupBg} alt="Drone Sky" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 p-12 flex flex-col justify-between z-20 text-white">
                    <NavLink to="/" className="flex items-center gap-2 group/logo w-fit">
                        <div className="bg-[#ff4500] p-1.5 rounded-lg border border-white/20">
                            <GiDeliveryDrone className="text-white text-2xl" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter shadow-sm">SkyCargo</span>
                    </NavLink>
                    <div className="space-y-4 max-w-sm">
                        <h2 className="text-4xl font-black leading-tight drop-shadow-lg">Elevating Logistics to New Heights.</h2>
                        <div className="h-1 w-16 bg-[#ff4500] rounded-full"></div>
                        <p className="text-base text-white/80 font-medium">Join over 10,000+ businesses delivering smarter across the city every day.</p>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">© 2026 SkyCargo Technologies</div>
                </div>
            </div>

            {/* Right Side: Scrollable Form Container */}
            <div className="w-full lg:w-[60%] xl:w-[55%] h-full flex flex-col items-center justify-center p-6 bg-white overflow-y-auto no-scrollbar">
                <div className="w-full max-w-[500px] flex flex-col gap-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-black text-[#111]">Create Account</h1>
                        <p className="text-gray-400 font-semibold text-sm">Experience the future of logistics starting today.</p>
                    </div>

                    <div className="space-y-5">
                        <button className="w-full py-3.5 px-6 rounded-2xl border border-gray-100 flex items-center justify-center gap-3 font-bold text-xs text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98] shadow-sm">
                            <FcGoogle className="text-xl" /> Sign up with Google
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-[1px] bg-gray-100"></div>
                            <span className="text-[9px] font-black uppercase text-gray-300 tracking-[0.2em] px-2">OR MANUAL SIGNUP</span>
                            <div className="flex-1 h-[1px] bg-gray-100"></div>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase text-gray-400 pl-3 tracking-widest">Global Full Name</label>
                                <input 
                                    name="fullName"
                                    className="w-full bg-gray-50/50 border border-gray-100 px-6 py-3.5 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                    type="text" 
                                    placeholder="e.g. John Wick"
                                    value={formData.fullName} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 pl-3 tracking-widest">Email Address</label>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-50/50 border border-gray-100 px-6 py-3.5 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                        type="email" 
                                        placeholder="wick@high.table"
                                        value={formData.email} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 pl-3 tracking-widest">Username</label>
                                    <input 
                                        name="username"
                                        className="w-full bg-gray-50/50 border border-gray-100 px-6 py-3.5 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                        type="text" 
                                        placeholder="baba_yaga"
                                        value={formData.username} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 pl-3 tracking-widest">Phone Number</label>
                                    <input 
                                        name="phoneNo"
                                        className="w-full bg-gray-50/50 border border-gray-100 px-6 py-3.5 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                        type="tel" 
                                        placeholder="+1 234 567 89"
                                        value={formData.phoneNo} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 pl-3 tracking-widest">Password</label>
                                    <input 
                                        name="password"
                                        className="w-full bg-gray-50/50 border border-gray-100 px-6 py-3.5 rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                        type="password" 
                                        placeholder="••••••••"
                                        value={formData.password} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <button 
                                disabled={loading}
                                className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#ff4500] transition-all transform active:scale-[0.98] shadow-lg shadow-black/5 mt-4 disabled:opacity-50" 
                                type="submit"
                            >
                                {loading ? "Creating..." : "Join the Fleet"} <BsArrowRight className="text-lg" />
                            </button>
                        </form>

                        <p className="text-center text-[13px] text-gray-500 font-medium">
                            Joined already? <NavLink to="/login" className="text-black font-black hover:text-[#ff4500] transition-colors">Sign in</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;