import React from "react";
import Navbar from "../../Component/Navbar";
import "../../Stylesheet/User/land.css";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import heroimg from "../../Image/pngwing.com.png";
import Steps from "./../../Component/step";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-txt">
          <h2>
            Get your goods delivered as quickly and safely as possible using our
            Evtol Delivery Service
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
            ultricies justo enim eget dolor. Vivamus nec ligula nec nulla
            suscipit luctus. Nulla facilisi.
          </p>
          <NavLink to="/overview" className="hero-nav">
            Get Started
          </NavLink>
        </div>
        <div className="hero-img">
          <img src={heroimg} alt="" />
        </div>
      </div>
      <div className="next-sell">
        <div className="sell-text">
          <h2>
            Get Everything you need in just a few minutes of efficient drone
            delivery
          </h2>
          <div className="perks">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="perk-bx">
              <BsFillInfoCircleFill id="perk-i" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="perk-bx">
              <BsFillInfoCircleFill id="perk-i" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="perk-bx">
              <BsFillInfoCircleFill id="perk-i" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="perk-bx">
              <BsFillInfoCircleFill id="perk-i" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
        <div className="sell-img"></div>
      </div>
      <div className="steps">
        <h2>How to easily use and enjoy SkyCargo</h2>
        <div className="step-con">
          <Steps />
          <div className="step-caro-con">
            <div className="step-caro"></div>
          </div>
        </div>
      </div>
      <div className="serv">
        <div className="servbx">
          <div className="serv-tx">
            <h2>Delivery Made Super Easy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
              ultricies justo enim eget dolor.
            </p>
            <button>Make A Request</button>
          </div>
          <div className="serv-tx" id="serv-img"></div>
          <div className="serv-tx" id="serv-img"></div>
          <div className="serv-tx">
            <h2>Deliver To A Friend</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
              ultricies justo enim eget dolor.
            </p>
            <button>Gift Someone Now</button>
          </div>
          <div className="serv-tx">
            <h2>Enjoy Numerous Discounts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
              ultricies justo enim eget dolor.
            </p>
            <button>Get Started Now</button>
          </div>
          <div className="serv-tx" id="serv-img"></div>
        </div>
      </div>
      <div className="sub-con">
        <div className="sub-bx">
          <h2>Subscribe To Ou NewsLetters</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
            ultricies justo enim eget dolor. Vivamus nec ligula nec nulla
            suscipit luctus. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
            ultricies justo enim eget dolor. Vivamus nec ligula nec nulla
            suscipit luctus. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
            ultricies justo enim eget dolor. Vivamus nec ligula nec nulla
            suscipit luctus. Nulla facilisi.</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
