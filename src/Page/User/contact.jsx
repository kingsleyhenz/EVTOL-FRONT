import React from "react";
import Navbar from './../../Component/Navbar';
import { BsEnvelope, BsTelephone, BsGeoAlt, BsArrowRight } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="bg-white min-h-screen font-['Poppins']">
            <Navbar />
            
            {/* Hero */}
            <header className="w-full py-24 flex flex-col items-center text-center px-5 max-w-4xl mx-auto">
                <p className="text-[#ff4500] font-black text-xs uppercase tracking-[0.4em] mb-4">Connect With Us</p>
                <h1 className="text-5xl md:text-6xl font-black text-[#111] mb-8">Ready to Take Flight?</h1>
                <p className="text-gray-500 text-lg leading-relaxed">
                    Whether you're looking for a logistical partnership or just curious about our drones, 
                    our team is ready to assist you in every step of the journey.
                </p>
            </header>

            {/* Contact Form & Info */}
            <section className="py-24 px-[5%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col gap-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-[#111]">Get in Touch</h2>
                        <p className="text-gray-500 font-medium">Have questions? We'll get back to you within 24 hours.</p>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex items-center gap-6 p-8 rounded-3xl border border-gray-100 hover:border-black transition-all group">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex justify-center items-center text-2xl group-hover:bg-black group-hover:text-white transition-all">
                                <BsEnvelope />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest text-[#ff4500]">Email us</h4>
                                <p className="text-lg font-bold text-[#111]">hello@skycargo.tech</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-8 rounded-3xl border border-gray-100 hover:border-black transition-all group">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex justify-center items-center text-2xl group-hover:bg-black group-hover:text-white transition-all">
                                <BsTelephone />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest text-[#ff4500]">Call our hub</h4>
                                <p className="text-lg font-bold text-[#111]">+1 (888) 321-SKY</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-8 rounded-3xl border border-gray-100 hover:border-black transition-all group">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex justify-center items-center text-2xl group-hover:bg-black group-hover:text-white transition-all">
                                <BsGeoAlt />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest text-[#ff4500]">Headquarters</h4>
                                <p className="text-lg font-bold text-[#111]">12 SkyBase Way, Aeropolis</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
                    <form className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 pl-2 tracking-widest">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white px-6 py-4 rounded-3xl border border-gray-100 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase text-gray-400 pl-2 tracking-widest">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white px-6 py-4 rounded-3xl border border-gray-100 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase text-gray-400 pl-2 tracking-widest">Reason for Inquiry</label>
                            <select className="w-full bg-white px-6 py-4 rounded-3xl border border-gray-100 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all">
                                <option>General Inquiry</option>
                                <option>Business Partnership</option>
                                <option>Technical Support</option>
                                <option>Press/Media</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase text-gray-400 pl-2 tracking-widest">Your Message</label>
                            <textarea placeholder="Tell us what's on your mind" rows="6" className="w-full bg-white px-6 py-6 rounded-[2rem] border border-gray-100 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"></textarea>
                        </div>
                        <button className="bg-black text-white px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#ff4500] transition-colors group">
                            Send Transmission <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
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

export default Contact;
