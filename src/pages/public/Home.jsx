import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import { BsFillInfoCircleFill, BsArrowRight } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import heroimg from "../../assets/images/pngwing.com.png";
import sellImg from "../../assets/images/Lovepik_com-401893396-drone-delivery.png";
import Steps from "../../components/step";

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-['Poppins']">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-[5%] py-12 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff4500]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10"></div>
        
        <div className="w-full md:w-[50%] flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 bg-[#ff4500]/10 text-[#ff4500] px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider w-fit">
            <GiDeliveryDrone /> Next-Gen Delivery Solutions
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.1] font-black text-[#111]">
            Faster. Safer. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-orange-400">Smarter</span> Logistics.
          </h1>
          <p className="text-lg text-gray-500 max-w-[500px] leading-relaxed">
            Experience the future of logistics with our advanced eVTOL drone network. 
            Delivering your essentials across the city in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <NavLink to="/register-account" className="bg-[#111] text-white px-10 py-5 rounded-full font-bold text-[15px] hover:bg-[#ff4500] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10 flex items-center gap-2 group">
              Start Shipping Now <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/about" className="text-[#111] font-bold py-5 px-8 hover:text-[#ff4500] transition-colors">
              Learn More
            </NavLink>
          </div>
        </div>
        
        <div className="w-full md:w-[45%] mt-12 md:mt-0 relative animate-float">
          <img src={heroimg} alt="Drone Hero" className="w-full h-auto drop-shadow-2xl" />
        </div>
      </section>

      {/* Stats/Badge Section */}
      <section className="py-20 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl font-black text-[#111]">99%</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#111]">15m</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Avg. Time</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#111]">0.0%</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Failure Rate</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#111]">24/7</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Operation</p>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-32 px-[5%] bg-white">
        <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-[45%] h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl group border-[10px] border-white ring-1 ring-gray-100">
                <div className="w-full h-full bg-center bg-no-repeat bg-contain group-hover:scale-150 transition-transform duration-700" style={{ backgroundImage: `url(${sellImg})` }}></div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-10">
                <p className="text-[#ff4500] font-black text-sm uppercase tracking-[0.3em]">Core Technology</p>
                <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-tight">
                    Beyond Simple Delivery. We Build Infrastructure.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#ff4500]/30 transition-colors">
                        <BsFillInfoCircleFill className="text-3xl text-[#ff4500]" />
                        <h4 className="font-bold text-lg">Smart Routing</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Our AI recalculates the fastest path every millisecond based on weather and altitude.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#ff4500]/30 transition-colors">
                        <BsFillInfoCircleFill className="text-3xl text-[#ff4500]" />
                        <h4 className="font-bold text-lg">Secure Cargo</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Biometric locking system ensures only the intended recipient can unlock the parcel.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] -skew-x-12 translate-x-1/2 -z-0 opacity-[0.02]"></div>
        <div className="max-w-6xl mx-auto px-5 relative z-10 text-center flex flex-col gap-20">
            <div className="flex flex-col gap-4">
                <p className="text-[#ff4500] font-black text-sm uppercase tracking-[0.3em]">Get Started</p>
                <h2 className="text-4xl font-black text-[#111]">How it works</h2>
            </div>
            <div className="w-full">
                <Steps />
                <div className="mt-20 flex justify-center">
                    <div className="w-full max-w-4xl h-[400px] bg-center bg-no-repeat bg-contain animate-img drop-shadow-2xl"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Services/Use Cases */}
      <section className="py-32 px-[5%] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { title: "Personal Express", desc: "Small parcels, documents, and gifts delivered across town in minutes.", btn: "Make A Request" },
                { title: "Medical Logistics", desc: "Urgent delivery of supplies, samples, and medicine between facilities.", btn: "Contact Sales" },
                { title: "Retail Solutions", desc: "Integrate SkyCargo into your local store to offer instant delivery.", btn: "Partner With Us" }
            ].map((item, idx) => (
                <div key={idx} className="group p-10 rounded-[40px] border border-gray-200 hover:border-black transition-all hover:bg-black hover:text-white flex flex-col gap-6 items-start">
                    <div className="w-16 h-16 bg-gray-100 group-hover:bg-white/10 rounded-2xl mb-4 flex justify-center items-center text-3xl group-hover:text-white transition-all">
                        <GiDeliveryDrone className="text-black group-hover:text-white transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-white">{item.title}</h3>
                    <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed">{item.desc}</p>
                    <button className="mt-4 px-6 py-3 rounded-full border-2 border-black group-hover:border-white font-bold text-sm tracking-wider uppercase group-hover:bg-white group-hover:text-black transition-all">{item.btn}</button>
                </div>
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-[5%] bg-[#111] text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Join the Logistics Revolution</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Subscribe to our newsletter for the latest updates on drone technology and exclusive early-access features.
            </p>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-10">
                <input type="email" placeholder="Your professional email" className="flex-1 bg-white/10 border border-white/20 px-8 py-5 rounded-full text-white placeholder-gray-500 outline-none focus:border-[#ff4500] transition-all" />
                <button className="bg-[#ff4500] text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all transform active:scale-95 shadow-xl shadow-[#ff4500]/20">Subscribe</button>
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
              <p className="text-gray-400 text-sm leading-relaxed">Pioneering the future of autonomous logistics with eVTOL technology. Faster, safer, and cleaner delivery for everyone.</p>
          </div>

          <div className="flex flex-col gap-6">
              <p className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em]">Quick Links</p>
              <div className="flex flex-col gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                  <NavLink to="/privacy" className="hover:text-[#ff4500] transition-colors">Privacy Policy</NavLink>
                  <NavLink to="/terms" className="hover:text-[#ff4500] transition-colors">Terms of Service</NavLink>
                  <NavLink to="/support" className="hover:text-[#ff4500] transition-colors">Support Center</NavLink>
              </div>
          </div>

          <div className="flex flex-col gap-6">
              <p className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em]">Contact Developer</p>
              <div className="flex flex-col gap-4 text-sm font-bold text-gray-700">
                  <a href="mailto:ayehenz29@gmail.com" className="hover:text-[#ff4500] transition-colors flex items-center gap-2 italic lowercase font-medium tracking-normal">ayehenz29@gmail.com</a>
                  <a href="https://github.com/kingsleyhenz" target="_blank" rel="noreferrer" className="hover:text-[#ff4500] transition-colors flex items-center gap-2">github.com/kingsleyhenz</a>
                  <a href="https://wa.me/2348146615530" target="_blank" rel="noreferrer" className="hover:text-[#ff4500] transition-colors flex items-center gap-2">08146615530 (whatsapp)</a>
                  <a href="tel:09150706849" className="hover:text-[#ff4500] transition-colors flex items-center gap-2">09150706849</a>
              </div>
          </div>
      </footer>
      <div className="py-8 border-t border-gray-50 bg-white text-center">
          <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.5em]">© 2026 SkyCargo Technologies. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
