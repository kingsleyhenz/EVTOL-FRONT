import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GiDeliveryDrone } from "react-icons/gi";
import { toast } from 'react-toastify';
import axios from 'axios';
import { BsArrowRight } from "react-icons/bs";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const baseUrl = 'https://droneservice.onrender.com'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/api/v1/user/login`, {
                email,
                password
            });
            if (response.status === 200) {
                toast.success("Login Successful👋");
                localStorage.setItem("auth_token", response.data.token);
                localStorage.setItem("role", response.data.role)
                navigate('/user-dash');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || 'Login failed');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-gray-50 font-['Poppins'] p-6">
            <NavLink to="/" className="fixed top-8 left-8 flex items-center gap-2 group z-50">
                <div className="bg-[#ff4500] p-1.5 rounded-lg border border-white/20">
                    <GiDeliveryDrone className="text-white text-2xl" />
                </div>
                <span className="font-black text-2xl tracking-tighter text-black">SkyCargo</span>
            </NavLink>

            <div className="w-full max-w-[550px] bg-white rounded-[3rem] shadow-2xl shadow-black/[0.03] p-10 md:p-16 border border-gray-100 flex flex-col gap-8">
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-black text-black">Welcome Back</h1>
                    <p className="text-gray-400 text-sm font-semibold italic">Continue your flight with SkyCargo Logistics</p>
                </div>

                <div className="space-y-6">
                    <button className="w-full py-4 px-6 rounded-2xl border border-gray-100 flex items-center justify-center gap-4 font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98] shadow-sm">
                        <FcGoogle className="text-2xl" /> Continue with Google
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-[1px] bg-gray-100"></div>
                        <span className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em]">OR MANUAL LOGIN</span>
                        <div className="flex-1 h-[1px] bg-gray-100"></div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase text-gray-400 pl-4 tracking-widest">Registered Email</label>
                            <input 
                                className="w-full bg-gray-50/50 border border-gray-100 px-8 py-4 rounded-[2rem] outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                type="email" 
                                placeholder="name@company.com"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-4">
                                <label className="text-[11px] font-black uppercase text-gray-400 tracking-widest">Secret Password</label>
                                <NavLink to="/forgot" className="text-[11px] font-bold text-[#ff4500] hover:underline">Forgot Access?</NavLink>
                            </div>
                            <input 
                                className="w-full bg-gray-50/50 border border-gray-100 px-8 py-4 rounded-[2rem] outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium" 
                                type="password" 
                                placeholder="••••••••"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button 
                            disabled={loading}
                            className="w-full bg-black text-white py-5 rounded-[2rem] font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#ff4500] transition-all transform active:scale-[0.98] shadow-2xl shadow-[#ff4500]/10 mt-6 disabled:opacity-50" 
                            type="submit"
                        >
                            {loading ? "Authenticating..." : "Sign In Securely"} <BsArrowRight className="text-xl" />
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400 font-semibold">
                        New pilot? <NavLink to="/register-account" className="text-black font-black hover:text-[#ff4500] transition-colors underline decoration-2 underline-offset-4 decoration-gray-200 hover:decoration-[#ff4500]">Create Account</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;