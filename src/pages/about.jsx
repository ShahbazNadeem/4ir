import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Header";
import Team from "@/Componenets/home/Team";
import Testimonial from "@/Componenets/home/CalltoAction";
import React, { useState } from "react"; // Import useState
import Feature from "@/images/feature.gif";
import Featurebg from "@/images/feature-bg.png";
import Person1 from "@/images/team/BarryKrevoy.png";
import Person2 from "@/images/team/ShaneKrevoy.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "@/Componenets/about/Banner";
import Headingh4 from "@/Componenets/typography/h4/H4";
import Headingh2 from "@/Componenets/typography/h2/H2";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import CalltoAction from "@/Componenets/home/CalltoAction";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [activeTab, setActiveTab] = useState("mission");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabTexts = {
    mission: "Empowering businesses and solopreneurs to think big and embrace the Fourth Industrial Revolution. We offer cutting-edge solutions and expert support for digital transformation. Our commitment is to help clients navigate technological changes and achieve sustainable growth.",
    vision: "We aim to lead change by driving transformative tech and big thinking in businesses and solopreneurs. Our goal is to build a resilient, innovative community ready for the Fourth Industrial Revolution, revolutionizing digital transformation for long-term success in a changing world.",
    value: "We value innovation, collaboration, and continuous learning in the face of rapid technological change. Integrity, excellence, and a client-centric approach are at the core of everything we do. We are passionate about empowering our clients to achieve their full potential in the digital age."
  };
  const TeamBox = [
    {
      id: 1,
      personimg:Person1,
      name: "Barry Krevoy",
      description: "CEO | 4IR Transformative Leadership Consultant/Advisor/Speaker | Executive Education Instructor",
      columnclass:"col-xl-3 col-lg-4 col-sm-6",
      firstChildClass:"team-box",
      secondChildClass:"feature-top mt-4",
      contentclass: "link-overflow",
      layout:true,
      icon: faArrowRight,
      
    },
    {
      id: 2,
      personimg:Person2,
      name: "Shane Krevoy",
      description: "4IR Transformative Leadership Advisor/Consultant",
      columnclass:"col-xl-3 col-lg-4 col-sm-6",
      firstChildClass:"team-box",
      secondChildClass:"feature-top mt-4",
      layout:true,
      contentclass: "link-overflow",
      icon: faArrowRight,
    },
  ];
  return (
    <>
      <Navbar handleOpenModal={handleOpenModal} showModal={showModal}handleCloseModal={handleCloseModal} />
      <Banner
        heading="FOURTH INDUSTRIAL REVOLUTION INC"
        title="ABOUT US"
        paragraph="AI Solutions Experts: Our Story and Mission"
        layout={false}
      />
      <div className="service-section section-b-space mt-2 about">
        <div className="container">
          <div className="row g-5">
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh4 style={{ color: "#00BDFF" }} heading="Driving Innovation in the 4IR Era" />
                  <Headingh2
                    spanstyle={{ color: "#ffce00" }}
                    title="Empowering Your Business"
                    secondtitle="In The Fourth Industrial Revolution"
                  />
                </div>
                <Para
                  className="service-content"
                  paragraph="At Fourth Industrial Revolution Inc., we are dedicated to empowering small to midsize businesses and solopreneurs to thrive in the rapidly evolving digital landscape. Our mission is simple yet profound: to equip businesses with the knowledge and tools they need to embrace transformative technologies, remain competitive, reduce costs, and drive profits. By guiding businesses through the complexities of the Fourth Industrial Revolution, we help them unlock their full potential and navigate the future with confidence."
                />
                <div className="card text-center" style={{ backgroundColor: "transparent", marginTop: "1.5rem", borderColor: "#00BDFF" }}>
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-items">
                        <p className={`nav-links ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => handleTabClick('mission')}>Our Mission</p>
                      </li>
                      <li className="nav-items">
                        <p className={`nav-links ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => handleTabClick('vision')}>Our Vision</p>
                      </li>
                      <li className="nav-items">
                        <p className={`nav-links ${activeTab === 'value' ? 'active' : ''}`} onClick={() => handleTabClick('value')}>Our Value</p>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      {tabTexts[activeTab]} {/* Render the text based on the active tab */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team
        heading="Innovative Minds Behind The Vision"
        ServiceBox={TeamBox}
        img1={Feature}
        img2={Featurebg}
        layout={true}
      />
     <CalltoAction handleOpenModal={handleOpenModal} showModal={showModal}handleCloseModal={handleCloseModal} />
      <Footer />
    </>
  );
};

export default About;
