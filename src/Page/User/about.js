import React from "react";
import '../../Stylesheet/User/about.css'
import Navbar from './../../Component/Navbar';
import { RiSpeedFill } from "react-icons/ri";
import { AiFillEnvironment } from "react-icons/ai";
import { SiPrivateinternetaccess } from "react-icons/si";


const About=()=>{
    return(
        <>
            <Navbar/>
            <div className="about-header">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, <br/> leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor.</p>
            </div>
            <div className="abt-us">
                <h2>Why choose us</h2>
                <div className="abt-card-bx">
                    <div className="abt-cards">
                        <div className="abt-ico">
                            <RiSpeedFill/>
                        </div>
                        <p className="abt-hd">Speed and Efficiency</p>
                        <p>Drones can significantly reduce delivery times by flying directly to their destinations, bypassing the myriad obstacles and delays that plague ground-based transportation methods such as cars and trucks.</p>
                    </div>
                    <div className="abt-cards">
                        <div className="abt-ico">
                            <AiFillEnvironment/>
                        </div>
                        <p className="abt-hd">Environmental Impact</p>
                        <p>Drones, especially those powered by electric batteries, have a much lower environmental impact compared to traditional delivery vehicles. They emit fewer greenhouse gases and pollutants since they don't rely on gasoline or diesel.</p>
                    </div>
                    <div className="abt-cards">
                        <div className="abt-ico">
                            <SiPrivateinternetaccess/>
                        </div>
                        <p className="abt-hd">Accessibilty and Convenience</p>
                        <p>Drone delivery apps can significantly enhance accessibility, bringing products and essential items to remote or hard-to-reach areas where traditional delivery services might not reach or would take significantly longer.</p>
                    </div>
                </div>
            </div>
            <div className="svc-bx">
                <div className="svc-con">
                    <div className="svc-card img"></div>
                    <div className="svc-card">
                        <h3>What we do</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
                    </div>
                    <div className="svc-card">
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
                    </div>
                    <div className="svc-card img"></div>
                    <div className="svc-card img"></div>
                    <div className="svc-card">
                        <h3>Primary Targets</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, leo nec facilisis tincidunt, ipsum mi cursus orci, vel ultricies justo enim eget dolor. Vivamus nec ligula nec nulla suscipit luctus. Nulla facilisi.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;