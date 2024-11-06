import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Homebg from "@/images/home/home-bg.gif";
import titleeffect from "@/images/title-effect.png";
import hand from "@/images/landing/ai_talk_assist/hand.png";
import Home1 from "../../../public/assets/svg/home/1.png";
import Home2 from "../../../public/assets/svg/home/2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Mainlogo from "@/images/4IRLogomain.png";
import AboutBoxes from "@/Componenets/about/AboutBoxes";
import Live from "@/images/landing/ai_talk_assist/Feature Pics/Live Transfers.png";
import Appointment from "@/images/landing/ai_talk_assist/Feature Pics/Appointment Scheduling.png";
import Lead from "@/images/landing/ai_talk_assist/Feature Pics/Lead Qualification.png";
import Customer from "@/images/landing/ai_talk_assist/Feature Pics/Customer Support (Q_A).png";
import Communication from "@/images/landing/ai_talk_assist/Feature Pics/Off-Hours Communication Handling.png";
import Training from "@/images/landing/ai_talk_assist/Feature Pics/Staff Training.png";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Button from "@/Componenets/typography/button/Button";
import Model from "@/Componenets/model/Model";

const AitalkAssist = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const Box = [
    {
      id: 1,
      image: Live,
      heading: "Live Transfers",
      title:
        "Seamlessly connect your customers with the right team members in real-time.",
      para: "Our AI-powered system transfers calls directly to your staff, ensuring high-priority calls are handled by the appropriate agents. Enhances customer experience and operational efficiency.",
    },
    {
      id: 2,
      image: Appointment,
      heading: "Appointment Scheduling",
      title: "Automate your appointment setting with precision and ease.",
      para: "AI Talk Assist helps avoid scheduling conflicts by synchronizing with your existing calendar system. Your team remains organized and efficient.",
    },
    {
      id: 3,
      image: Lead,
      heading: "Lead Qualification",
      title: "Identify and prioritize high-quality leads.",
      para: "AI evaluates qualified leads based on their needs, saving your team time and helping close more deals. Increases conversions with less effort.",
    },
    {
      id: 4,
      image: Customer,
      heading: "Customer Support (AI)",
      title:
        "Provide 24/7 customer support without the need for additional staff.",
      para: "AI Talk Assist answers frequently asked questions, resolving simple inquiries instantly while freeing up human resources to handle more complex issues.",
    },
    {
      id: 5,
      image: Communication,
      heading: "Off-Hours Communication Handling",
      title: "Never miss a customer interaction, even after business hours.",
      para: "AI Talk Assist answers frequently asked questions, resolving simple inquiries instantly while freeing up human resources to handle more complex issues.",
    },
    {
      id: 6,
      image: Training,
      heading: "Staff Training",
      title: "Train your team to leverage AI for enhanced productivity.",
      para: "Specialized AI modules train your staff on how to utilize AI tools to their maximum potential. Ensures teams stay ahead in the age of automation",
    },
  ];
  return (
    <>
    {showModal && (
      <Model close={handleCloseModal} />
      )}
      <header>
        <button
          className="navbar-toggler d-xl-none d-inline navbar-menu-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#primaryMenu"
        >
          <span className="navbar-toggler-icon">
            <i className="iconsax" data-icon="text-align-justify"></i>
          </span>
        </button>
        <Link href="/">
          <Image
            src={Mainlogo}
            id="logo-img"
            style={{ position: "relative", marginTop: "-0.6rem" }}
            className="img-fluid"
            alt="logo"
          />
        </Link>
        <nav className="header-nav-middle">
          <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
            <div
              className="offcanvas offcanvas-collapse order-xl-2"
              id="primaryMenu"
            >
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mb-0">Back</h5>
                <button
                  className="btn-close lead"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      style={{ paddingBottom: "10px" }}
                      href="#feature-section"
                    >
                      Features
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#how-it-work">
                      How It Works
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="#testimonial-section">
                      Testimonials
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#faq-section">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Button
          style={{
            position: "relative",
            marginTop: "-1.5rem",
            padding: "13px 32px",
          }}
          click={handleOpenModal}
          title="Book a Demo"
          className="btn btn-theme d-sm-inline-block d-none"
        />
      </header>
      <section id="home" className="home-section aitalkassist">
        <div className="container" style={{ marginTop: "10rem" }}>
          <div className="row">
            <div className="col-12">
              <div className="home-content">
                <div className="bg-effect">
                  <Image src={Homebg} className="img-fluid bg-gif" alt="" />
                  <Image
                    src={Home1}
                    className="img-fluid effect1 rotate-effect"
                    alt=""
                  />
                  <Image
                    src={Home2}
                    className="img-fluid effect2 rotate-effect"
                    alt=""
                  />
                </div>
                <div style={{ marginLeft: "90px" }}>
                  <h1>
                    Transform Your Customer Experience with <br />
                    <div className="title-effect">
                      <Image src={titleeffect} alt="" />
                      <span style={{ color: "#ffce00" }}>AI TALK ASSIST</span>
                    </div>
                  </h1>
                  <Para paragraph=" Experience the convenience of AI-driven calls. Let
                    technology handle your communication needs effortlessly,
                    saving you time and hassle." />
                  <Link
                    className="start-link mic_text"
                    href=""
                    style={{
                      color: "white",
                      textDecoration: "none",
                      backgroundColor: "#8800ff",
                      fontSize: "calc(18px + 4*(100vw - 320px) / 1600)",
                    }}
                  >
                    Give it a try!
                  </Link>
                </div>
              </div>
              <div className="home-laptop px-md-0 px-3">
                <div className="laptop-sec position-relative">
                  <div className="mic-sec">
                    <div className="mic-div" style={{ marginLeft: "-250px" }}>
                      <button type="button" className="mic listening ">
                        <FontAwesomeIcon
                          icon={faMicrophone}
                          style={{ color: "#00BDFF" }}
                        />

                        <canvas
                          className="visualizer"
                          width="300"
                          height="100"
                          style={{ left: "100%" }}
                        ></canvas>
                      </button>
                      <Button
                        style={{
                          textDecoration: "none",
                          fontSize: "1rem",
                          color: "white",
                          border: "1px solid #8800ff",
                          backgroundColor: "#8800ff ",
                          display: "inline",
                          borderRadius: "1rem",
                          padding: "3px 12px",
                        }}
                        title="Book a Demo"
                     click={handleOpenModal}
                       />
                    </div>
                  </div>
                  <div
                    className="hand-sec"
                    style={{
                      position: "relative",
                      marginTop: "16rem",
                      top: "15rem",
                    }}
                  >
                    <Image
                      src={hand}
                      className="img-fluid left-hand"
                      style={{ marginLeft: "5rem" }}
                      alt="hand"
                    />
                    <Image
                      src={hand}
                      className="img-fluid right-hand"
                      style={{ marginRight: "5rem" }}
                      alt="hand"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-b-space services_section" id="feature-section">
        <div className="container">
          <div className="text-white text-center" style={{marginBottom: "6rem"}}>
            <h1>
              Unlock the <span style={{color: "#ffce00"}}>Power of AI</span> to
              Supercharge Your Business Communications
            </h1>
            <Para className="service-content" paragraph="AI Talk Assist automates routine calls, handles appointment
              setting, and manages customer queries, allowing you to focus on
              strategic initiatives. Save time, reduce operational costs, and
              provide a seamless customer experience—day or night." />
          </div>
      <AboutBoxes Box={Box} showbutton={false} />
        </div>
      </section>
      <section className="ai-features-section section-b-space service-section" id="how-it-work">
        <div className="container">
            <div className="ai-features-heading text-center text-white" style={{lineHeight: "1.3"}}>
                <h2> <span style={{color: "#ffce00"}}>AI Talk Assist:</span> Automated Calls, <br /> Human-Like Conversations
                </h2>
                <h3>Effortless Communication, Maximum Efficiency</h3>
                <Para paragraph="Transform your customer interactions with AI Talk Assist. Our intelligent, conversational AI makes
                    and receives calls with a natural flow, just
                    like talking to a real person. Pre-qualify leads, set appointments, and follow up automatically—all
                    while increasing conversion rates and freeing
                    up your team’s valuable time. Fully customizable and seamlessly integrated with your CRM, AI Talk
                    Assist is available 24/7, reducing costs and
                    ensuring your business is always ready to grow. Plus, it’s built with security and scalability in
                    mind, adapting as your business evolves." />
            </div>

            <div className="ai-features-container">
                <div className="ai-vertical-line"></div>

           
                <div className="ai-feature-box-wrapper ai-left-box">
                    <div className="ai-feature-box  service-box">
                        <h3>Automated Calls, Human Results</h3>
                        <Para paragraph="AI Talk Assist ensures your business is always available, making and receiving calls with
                            natural, conversational AI that feels like talking to a real person." />
                        
                    </div>
                    <div className="ai-horizontal-line-left">
                        <div className="line-dot"></div>
                    </div>
                </div>

                <div className="ai-feature-box-wrapper ai-right-box">
                    <div className="ai-horizontal-line-right">
                        <div className="line-dot"></div>
                    </div>
                    <div className="ai-feature-box   service-box">
                        <h3>Increase Conversion Rates</h3>
                        <p>Pre-qualify leads, set up appointments, and follow up with customers—automatically. Watch
                            your
                            conversion rates soar while freeing up your team's time.</p>
                    </div>
                </div>

                <div className="ai-feature-box-wrapper ai-left-box">
                    <div className="ai-feature-box   service-box">
                        <h3>Fully Customizable</h3>
                        <p>Tailor AI Talk Assist to your specific business needs. It integrates smoothly with your CRM
                            and
                            marketing tools, so you can focus on growing your business.</p>
                    </div>
                    <div className="ai-horizontal-line-left">
                        <div className="line-dot"></div>
                    </div>
                </div>

                <div className="ai-feature-box-wrapper ai-right-box">
                    <div className="ai-horizontal-line-right">
                        <div className="line-dot"></div>
                    </div>
                    <div className="ai-feature-box   service-box">
                        <h3>Save Time, Cut Costs</h3>
                        <p>No more missed calls or time wasted on repetitive tasks. AI Talk Assist operates 24/7,
                            reducing
                            the need for additional staff.</p>
                    </div>
                </div>

                <div className="ai-feature-box-wrapper ai-left-box">
                    <div className="ai-feature-box  service-box">
                        <h3>Secure and Scalable</h3>
                        <p>Built with cutting-edge technology, AI Talk Assist is secure, scalable, and adaptable as your
                            business grows.</p>
                    </div>
                    <div className="ai-horizontal-line-left">
                        <div className="line-dot"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default AitalkAssist;
