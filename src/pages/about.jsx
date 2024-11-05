import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Header";
import Team from "@/Componenets/home/Team";
import Testimonial from "@/Componenets/home/Testimonial";
import React from "react";
import Feature from "@/images/feature.gif";
import Featurebg from "@/images/feature-bg.png";
import Person1 from "@/images/team/BarryKrevoy.png";
import Person2 from "@/images/team/ShaneKrevoy.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "@/Componenets/about/Banner";
import Detail from "@/Componenets/about/Detail";
import Headingh4 from "@/Componenets/typography/h4/H4";
import Headingh2 from "@/Componenets/typography/H2/H2";
import Para from "@/Componenets/typography/paragrapgh/paragraph";

const About = () => {
  return (
    <>
      <Navbar />
      <Banner
        heading="FOURTH INDUSTRIAL REVOLUTION INC"
        title="ABOUT US"
        paragraph="AI Solutions Experts: Our Story and Mission"
        layout={false}
      />
        <div className="service-section section-b-space mt-2">
                <div className="container">
                    <div className="row g-5">
                        <div className="service-info">
                            <div>
                                <div className="title">
                              <Headingh4 heading="Driving Innovation in the 4IR Era" />
                                  <Headingh2 title="Empowering Your Business"/>
                                </div>
                               <Para paragraph="At Fourth Industrial Revolution Inc., we are dedicated to empowering small to midsize businesses and solopreneurs to thrive in the rapidly evolving digital landscape. Our mission is simple yet profound: to equip businesses with the knowledge and tools they need to embrace transformative technologies, remain competitive, reduce costs, and drive profits. By guiding businesses through the complexities of the Fourth Industrial Revolution, we help them unlock their full potential and navigate the future with confidence." />
                                   {/* <br /><br />
                                   <span style={{fontSize: "0.87rem"}}> {spancontent1}</span>
                                   <br /><br />
                                   <span style={{fontSize: "0.87rem"}}>{spancontent2}</span> */}
                                   
                             

                               
                                    <div className="card text-center" style={{ backgroundColor: "transparent", marginTop: "1.5rem", borderColor: "#00BDFF" }}>
                                        <div className="card-header">
                                            <ul className="nav nav-tabs card-header-tabs">
                                                <li className="nav-items">
                                                    <p className="nav-links active" data-tab="mission">Our Mission</p>
                                                </li>
                                                <li className="nav-items">
                                                    <p className="nav-links" data-tab="vision">Our Vision</p>
                                                </li>
                                                <li className="nav-items">
                                                    <p className="nav-links" data-tab="value">Our Value</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Empowering businesses and solopreneurs to think big and embrace the Fourth Industrial Revolution. We offer cutting-edge solutions and expert support for digital transformation. Our commitment is to help clients navigate technological changes and achieve sustainable growth.
                                            </p>
                                        </div>
                                    </div>
                    {/* <div className="title">
                                    <h4 style={{ color: "#00BDFF", marginBottom: "1rem" }}>
                                       {heading}
                                    </h4>
                                    <h2>
                                        <span style={{ color: "#ffce00" }}>{title1}</span> {title2}
                                    </h2>
                                </div>
                                <p className="service_paragraph" style={{ marginBottom: "2rem", color:white }}>
                                   {paragraph}
                                   <br /><br />
                                   <span style={{fontSize: "0.87rem"}}> {spancontent1}</span>
                                   <br /><br />
                                   <span style={{fontSize: "0.87rem"}}>{spancontent2}</span>
                                   
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <Team
        heading="Innovative Minds Behind The Vision"
        img1={Feature}
        img2={Featurebg}
        personimg1={Person1}
        personimg2={Person2}
        icon={faArrowRight}
        nameBarry="Barry Krevoy"
        nameShane="Shane Krevoy"
        Barrydes="CEO | 4IR Transformative Leadership Consultant/Advisor/Speaker | Executive Education Instructor"
        Shanedes="4IR Transformative Leadership Advisor/Consultant"
        layout={true}
      />

      <Testimonial />
      <Footer />
    </>
  );
};

export default About;
