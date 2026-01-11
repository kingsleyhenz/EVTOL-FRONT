import React from "react";
import Navbar from './../../Component/Navbar';
import { RiSpeedFill, RiPlantFill, RiRoadMapFill } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
    return (
        <div className="bg-white min-h-screen font-['Poppins']">
            <Navbar />
            
            {/* Header */}
            <header className="w-full py-24 flex flex-col items-center text-center px-5">
                <p className="text-[#ff4500] font-black text-xs uppercase tracking-[0.4em] mb-4">Innovation in Flight</p>
                <h1 className="text-5xl md:text-6xl font-black text-[#111] mb-8">Redefining Logistics</h1>
                <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
                    SkyCargo is building the world's most advanced autonomous aerial delivery network, 
                    bridging the gap between speed, sustainability, and accessibility.
                </p>
            </header>

            {/* Why Choose Us */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-16">
                    <h2 className="text-3xl font-black text-[#111]">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-start gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 bg-black text-[#ff4500] rounded-2xl flex justify-center items-center text-3xl">
                                <RiSpeedFill />
                            </div>
                            <h3 className="text-xl font-bold">Speed and Efficiency</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Drones bypass gridlock and ground obstacles, reducing delivery times from hours to minutes. Real-time path optimization ensures every second counts.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-start gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 bg-black text-green-400 rounded-2xl flex justify-center items-center text-3xl">
                                <RiPlantFill />
                            </div>
                            <h3 className="text-xl font-bold">Environmental Impact</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Our 100% electric fleet produces zero direct emissions. By removing heavy vans from the road, we reduce both urban pollution and carbon footprints.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-start gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 bg-black text-blue-400 rounded-2xl flex justify-center items-center text-3xl">
                                <RiRoadMapFill />
                            </div>
                            <h3 className="text-xl font-bold">Total Accessibility</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">We reach remote clinics and high-density urban zones with equal precision, ensuring everyone has access to essential goods regardless of their location.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missions/Grid */}
            <section className="py-32 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-8 justify-center">
                        <div className="w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200">
                            <img src="https://www.udacity.com/blog/wp-content/uploads/2021/01/Drone-Engineer_Blog-scaled.jpeg" alt="Drone Engineering" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-black text-[#111]">What we do</h3>
                            <p className="text-gray-500 leading-relaxed">We operate a proprietary fleet of heavy-lift eVTOL drones equipped with advanced obstacle avoidance and biometric security. We don't just fly; we manage a complex ecosystem of autonomous fleet intelligence.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-12">
                        <div className="p-10 bg-black text-white rounded-[3rem] flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">Our Vision</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">To become the backbone of local logistics globally, making the physical movement of goods as friction-less and instant as sending a digital message.</p>
                            <button className="flex items-center gap-2 text-[#ff4500] font-bold text-sm uppercase tracking-wider hover:translate-x-2 transition-transform">
                                Join our journey <BsArrowUpRight />
                            </button>
                        </div>
                        <div className="p-10 border border-gray-100 rounded-[3rem] flex flex-col gap-6">
                            <h3 className="text-2xl font-black italic">"The future isn't automated, it's orchestrated."</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                                <div>
                                    <p className="font-bold text-sm">Marcus Vane</p>
                                    <p className="text-xs text-gray-500 tracking-tighter uppercase font-medium">Chief Operations Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default About;