import React from "react";
import Navbar from "../../Component/Navbar";
import "../../Stylesheet/User/land.css";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-txt">
          <h2>EVTOL SERVICE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel
            ultricies justo enim eget dolor. Vivamus nec ligula nec nulla
            suscipit luctus. Nulla facilisi. Cras auctor felis vitae ipsum
            fermentum, ut lacinia eros luctus. Quisque vel tortor velit. Nulla
            facilisi. Duis et quam ac mauris vehicula posuere. Sed eget posuere
            magna. Sed tincidunt neque et est ultricies, eget pellentesque justo
            luctus. Maecenas fermentum nunc eget felis fringilla, vel faucibus
            ipsum vestibulum.
          </p>
          <NavLink to="/overview" className="hero-nav">
            Get Started
          </NavLink>
        </div>
      </div>
        <div className="hero-f">
            <h2>Our Services</h2>
            <div className="hero-wrp">
            <div className="hero-cds">
                <div className="ico-h">
                <IoSettingsOutline id="ico-i"/>
                </div>
                <h3>Efficient Delivery</h3>
                <p>Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
            </div>
            <div className="hero-cds">
                <div className="ico-h">
                <IoSettingsOutline id="ico-i"/>
                </div>
                <h3>Efficient Delivery</h3>
                <p>Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
            </div>
            <div className="hero-cds">
                <div className="ico-h">
                <IoSettingsOutline id="ico-i"/>
                </div>
                <h3>Efficient Delivery</h3>
                <p>Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
            </div>
            <div className="hero-cds">
                <div className="ico-h">
                <IoSettingsOutline id="ico-i"/>
                </div>
                <h3>Efficient Delivery</h3>
                <p>Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
            </div>
            <div className="hero-cds">
                <div className="ico-h">
                <IoSettingsOutline id="ico-i"/>
                </div>
                <h3>Efficient Delivery</h3>
                <p>Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
            </div>
            <div className="hero-cds">
                <div className="ico-h">
                <IoSettingsOutline id="ico-i"/>
                </div>
                <h3>Efficient Delivery</h3>
                <p>Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
            </div>
            </div>
      </div>
    </>
  );
};

export default Landing;
