import React from "react";
import Navbar from './../../Component/Navbar';
import { GiDeliveryDrone } from "react-icons/gi";
import { BsShieldCheck, BsLightningCharge, BsCloudSun } from "react-icons/bs";
import { MdRadar } from "react-icons/md";

const Features = () => {
    return (
        <div className="bg-white min-h-screen font-['Poppins']">
            <Navbar />
            
            {/* Hero */}
            <header className="w-full py-24 flex flex-col items-center text-center px-5">
                <p className="text-[#ff4500] font-black text-xs uppercase tracking-[0.4em] mb-4">Our Fleet Capabilities</p>
                <h1 className="text-5xl md:text-6xl font-black text-[#111] mb-8">Performance & Precision</h1>
                <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
                    Powered by high-torque electric propulsion and state-of-the-art lidar arrays, 
                    our eVTOL fleet is built for any environment.
                </p>
            </header>

            {/* Grid of Features */}
            <section className="py-24 px-[5%] max-w-7xl mx-auto flex flex-col items-center gap-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col gap-6 hover:bg-black hover:text-white transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#ff4500] flex justify-center items-center text-white text-2xl shadow-lg shadow-[#ff4500]/20">
                            <BsLightningCharge />
                        </div>
                        <h4 className="font-bold text-lg">Hyper-Fast Charging</h4>
                        <p className="text-sm text-gray-500 hover:text-gray-400">Our drones recharge from 10% to 90% in under 12 minutes at any SkyBase hub.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col gap-6 hover:bg-black hover:text-white transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-black flex justify-center items-center text-white text-2xl shadow-lg shadow-black/20">
                            <BsShieldCheck />
                        </div>
                        <h4 className="font-bold text-lg">Military-Grade Security</h4>
                        <p className="text-sm text-gray-500 hover:text-gray-400">AES-256 encrypted flight links and biometric cargo locks keep your goods 100% safe.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col gap-6 hover:bg-black hover:text-white transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gray-900 flex justify-center items-center text-white text-2xl">
                            <MdRadar />
                        </div>
                        <h4 className="font-bold text-lg">Collision Avoidance</h4>
                        <p className="text-sm text-gray-500 hover:text-gray-400">Next-gen Lidar and ultrasonic sensors allow 360° obstacle detection and evasion.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col gap-6 hover:bg-black hover:text-white transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gray-400 flex justify-center items-center text-white text-2xl">
                            <BsCloudSun />
                        </div>
                        <h4 className="font-bold text-lg">All-Weather Ready</h4>
                        <p className="text-sm text-gray-500 hover:text-gray-400">Designed to operate in heavy rain, wind speeds up to 45km/h, and extreme temperatures.</p>
                    </div>
                </div>
            </section>

            {/* Special Feature - Dashboard/UI Preview */}
            <section className="py-24 px-[5%] bg-[#111] overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-[45%] flex flex-col gap-10 text-white">
                        <h2 className="text-4xl font-black leading-snug">Full Control in Your Pocket.</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="font-black text-6xl text-[#ff4500] opacity-30">01</span>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Real-time Telemetry</h4>
                                    <p className="text-gray-400 text-sm italic">Track speed, altitude, and current battery levels of your delivery drone.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="font-black text-6xl text-[#ff4500] opacity-30">02</span>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Instant Replanning</h4>
                                    <p className="text-gray-400 text-sm italic">Change drop-off points mid-flight with zero latency via our satellite link.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%] h-[500px] border-[15px] border-white/5 bg-black rounded-[4rem] flex flex-col items-center justify-center gap-10 shadow-3xl shadow-white/5 ring-1 ring-white/10 p-10">
                        <GiDeliveryDrone className="text-9xl text-[#ff4500] animate-bounce" />
                        <div className="w-full space-y-4">
                            <div className="h-4 bg-white/20 rounded-full w-full"></div>
                            <div className="h-4 bg-white/10 rounded-full w-[80%]"></div>
                            <div className="h-4 bg-white/5 rounded-full w-[60%]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 flex flex-col items-center gap-8">
                <h2 className="text-3xl font-black text-[#111]">Experience the Excellence</h2>
                <button className="bg-black text-white px-12 py-5 rounded-full font-bold hover:bg-[#ff4500] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-[14px]">Explore Our Dashboard</button>
            </section>

            {/* Footer */}
            <footer className="py-20 px-[5%] bg-white border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex flex-col gap-6 max-w-xs">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#ff4500] p-1.5 rounded-lg">
                            <GiDeliveryDrone className="text-white text-xl" />
                        </div>
                        <p className="text-xl font-black tracking-tight text-[#111]">SkyCargo</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em]">Developer</p>
                    <div className="flex flex-col gap-4 text-sm font-bold text-gray-700">
                        <a href="mailto:ayehenz29@gmail.com" className="hover:text-[#ff4500] transition-colors italic lowercase font-medium">ayehenz29@gmail.com</a>
                        <a href="https://github.com/kingsleyhenz" target="_blank" rel="noreferrer" className="hover:text-[#ff4500] transition-colors">github.com/kingsleyhenz</a>
                        <a href="https://wa.me/2348146615530" target="_blank" rel="noreferrer" className="hover:text-[#ff4500] transition-colors">08146615530 (whatsapp)</a>
                        <a href="tel:09150706849" className="hover:text-[#ff4500] transition-colors">09150706849</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Features;
