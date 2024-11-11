"use client";
import React, { useState, useEffect } from "react";
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
import Button1 from "@/Componenets/typography/button/Button";
import Model from "@/Componenets/model/Model";
import Testimonial from "@/Componenets/clientreview/Testimonial";
import Heading1 from "@/Componenets/typography/h1/Heading1";
import CalltoAction from "@/Componenets/home/CalltoAction";
import Headingh3 from "@/Componenets/typography/h3/Headingh3";
import H2 from "@/Componenets/typography/h2/Heading2";
import AiFeatureBox from "@/Componenets/ai-feature-box/AiFeatureBox";
import jimImg from "@/images/landing/ai_talk_assist/JimThiel .png";
import tobyImg from "@/images/landing/ai_talk_assist/TobyWoods.png";
import carolImg from "@/images/landing/ai_talk_assist/CarolHuston.png";
import Footer from "@/Componenets/home/Footer";
import FAQ from "@/Componenets/FAQ/Faq";
import Heading5 from "@/Componenets/typography/h5/Heading5";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/images/4IRLogomain.png";
import { useRouter } from "next/router";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Nav, NavItem, NavLink } from "reactstrap";
const AitalkAssist = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
    // Toggle offcanvas visibility
    const toggleOffcanvas = () => setIsOpen(!isOpen);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {  // Adjust this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup listener on unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const [isListening, setIsListening] = useState(false);
  const [audio, setAudio] = useState(null); // Initialize audio as null
  const [isAnimating, setIsAnimating] = useState(false); // State for animation

  // Use useEffect to create audio instance on the client side
  useEffect(() => {
    const audioInstance = new Audio("/assets/audio/heather-audio.wav");
    setAudio(audioInstance);

    // Cleanup function to stop audio when component unmounts
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0; // Reset audio to start
    };
  }, []);

  const handleMicClick = () => {
    setIsAnimating(true); // Start animation
    setIsListening((prev) => {
      if (prev) {
        if (audio) {
          audio.pause(); // Stop audio if it was playing
          audio.currentTime = 0; // Reset audio to start
        }
      } else {
        audio.play(); // Play audio if it was stopped
      }
      return !prev; // Toggle the listening state
    });

    // Remove animation class after a short delay
    setTimeout(() => {
      setIsAnimating(false); // Reset animation state
    }, 200); // Match the duration of the CSS transition
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
  const AiFeatureBoxapi = [
    {
      id: 1,
      title: "Automated Calls, Human Results",
      para: "AI Talk Assist ensures your business is always available, making and receiving calls with natural, conversational AI that feels like talking to a real person.",
      layout: false,
    },
    {
      id: 2,
      title: "Increase Conversion Rates",
      para: "Pre-qualify leads, set up appointments, and follow up with customers—automatically. Watch your conversion rates soar while freeing up your teams time.",

      layout: true,
    },
    {
      id: 3,
      title: "Fully Customizable",
      para: "Tailor AI Talk Assist to your specific business needs. It integrates smoothly with your CRM and marketing tools, so you can focus on growing your business.",

      layout: false,
    },
    {
      id: 4,
      title: "Save Time, Cut Costs",
      para: "No more missed calls or time wasted on repetitive tasks. AI Talk Assist operates 24/7, reducing the need for additional staff.",
      layout: true,
    },
    {
      id: 5,
      title: "Secure and Scalable",
      para: "Built with cutting-edge technology, AI Talk Assist is secure, scalable, and adaptable as your business grows.",
      layout: false,
    },
  ];
  const testimonials = [
    {
      content:
      " While many people are intimidated by AI, Barry has a way of making it practical and approachable. He's taen the mystery -- and the fear--out of it, showing us how AI can be a powerful tool in our arsenal. Thanks to Barry, we now see AI as a game-changer that frees up our time so we can focus on what truly matters--our clients." ,
      name: "Toby Woods",
      position: "NorthStar Systems, LLC",
      image: tobyImg,
      aosDelay: 400,
    },
    {
      content: "Best of the best that about sums up my experience.",
      name: "Jim Thiel",
      position: "Mortgage Advisor",
      image: jimImg,
      aosDelay: 0,
    },
    {
      content:
        "There commitment to helping clients incorporate AI and stay updated with the latest technologies is evident. Working with them has been both fun and rewarding, saving me time and money. I highly recommend Fourth Industrial Revolution to any buisness looking to enhance its digital presence and operational efficiency. ",
      name: "Carol Huston",
      position: "True Story Realty",
      image: carolImg,
      aosDelay: 500,
    },
  ];
  const Faq = [
    {
      id: 1,
      toggleId: 0,
      title:
        "How does AI Talk Assist handle customer interactions without feeling impersonal?",
      showtitle:
        "AI Talk Assist mimics natural human conversations, ensuring that customer interactions feel warm and personalized, enhancing user experience.",
        targetId:"panelsStayOpen-headingOne",
        ariaControls:"panelsStayOpen-collapseOne",
    },
    {
      id: 2,
      toggleId: 1,
      title: "Is AI Talk Assist difficult to set up?",
      showtitle:
        "No, it’s simple to integrate into your existing systems, with a smooth onboarding process to get your team up and running quickly.",
        targetId:"panelsStayOpen-headingTwo",
        ariaControls:"panelsStayOpen-collapseTwo",
    },
    {
      id: 3,
      toggleId: 2,
      title: "Can AI Talk Assist grow with my business?",
      showtitle:
        "Absolutely! AI Talk Assist is built to be secure, scalable, and adaptable as your business expands.",
        targetId:"panelsStayOpen-headingThree",
        ariaControls:"panelsStayOpen-collapseThree",
    },
    {
      id: 4,
      toggleId: 3,
      title: "How does AI Talk Assist qualify leads?",
      showtitle:
        "It automatically evaluates and prioritizes leads based on predefined criteria, ensuring your sales team focuses on high-potential customers.",
        targetId:"panelsStayOpen-headingFour",
        ariaControls:"panelsStayOpen-collapseFour",
    },
    {
      id: 5,
      toggleId: 4,
      title: "What happens to calls after business hours?",
      showtitle:
        "AI Talk Assist operates 24/7, handling inquiries and scheduling appointments even after business hours, ensuring constant accessibility for your customers.",
        targetId:"panelsStayOpen-headingFive",
        ariaControls:"panelsStayOpen-collapseFive",
    },
  ];
  const circleData = [
    {
      id: 1,
      toggleId: 0,
      label: "Personalized",
      targetId: "accordion-item",
    },
    { id: 2,    toggleId: 1, label: "Easy", targetId: "accordion-item" },
    {
      id: 3,
      toggleId: 2,
      label: "Scalable",
      targetId: "accordion-item",
    },
    {
      id: 4,
      toggleId: 3,
      label: "Efficient",
      targetId: "accordion-item",
    },
    {
      id: 5,
      toggleId: 4,
      label: "Continuous",
    },
  ];
  return (
    <>
      {showModal && <Model close={handleCloseModal} />}
         {/* Offcanvas Component */}
    
      <div id="home-header" >
        <header className={isSticky ? "sticky1" : ""}>
          <button
            className="navbar-toggler d-xl-none d-inline navbar-menu-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu"
            onClick={toggleOffcanvas}
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
            </span>
          </button>
          <Link href="/" style={{ cursor: "pointer", width: "auto" }}>
            <Image src={Logo} className="img-fluid" id="logo-img" alt="logo" priority />
          </Link>
          <nav className="header-nav-middle">
            <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
              <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                <div className="offcanvas-header navbar-shadow">
                  <Heading5 title="Back" className="mb-0" />
                  <button
                    className="btn-close lead"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className={`nav-item`}>
                    <Link
                      className="nav-link"
                      // style={{ paddingBottom: "10px" }}
                      href="#feature-section"
                    >
                      Features
                    </Link>
                    </li>
                    <li className={`nav-item `}>
                    <Link className="nav-link" href="#how-it-work">
                      How It Works
                    </Link>
                    </li>
                    <li className={`nav-item dropdown `}>
                    <Link className="nav-link" href="#faq-section">
                      FAQ
                    </Link>
                      <button
                        className="dropdown-toggle dropdown-arrow"
                        id="servicesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                    </li>
                    <li className={`nav-item`}>
                    <Link className="nav-link" href="#testimonial-section">
                      Testimonials
                    </Link>
                    </li>
                 
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <Button1
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
      </div>
    
      <section id="home" className="home-section aitalkassist">
        <div className="container" style={{ marginTop: "10rem" }}>
          <div className="row">
            <div className="col-12">
              <div className="home-content">
                <div className="bg-effect">
                  <Image src={Homebg} className="img-fluid bg-gif" alt="" priority />
                  <Image
                    src={Home1}
                    className="img-fluid effect1 rotate-effect"
                    alt=""
                    priority
                  />
                  <Image
                    src={Home2}
                    className="img-fluid effect2 rotate-effect"
                    alt=""
                    priority
                  />
                </div>
                <div style={{ marginLeft: "90px" }}>
                  <h1>
                    Transform Your Customer Experience with <br />
                    <div className="title-effect">
                      <Image src={titleeffect} alt="" priority />
                      <span style={{ color: "#ffce00" }}>AI TALK ASSIST</span>
                    </div>
                  </h1>
                  <Para
                    paragraph=" Experience the convenience of AI-driven calls. Let
                    technology handle your communication needs effortlessly,
                    saving you time and hassle."
                  />
                  <Link
                    className="start-link mic_text"
                    href=""
                    style={{
                      color: "white",
                      textDecoration: "none",
                      backgroundColor: "#8800ff",
                      fontSize: "calc(18px + 4*(100vw - 320px) / 1600)",
                      marginLeft: "532px"
                    }}
                  >
                    Give it a try!
                  </Link>
                </div>
              </div>
              <div className="home-laptop px-md-0 px-3">
                <div className="laptop-sec position-relative">
                  <div className="mic-sec">
                    <div className="mic-div">
                      <button type="button" className={`mic ${isAnimating ? "animating" : ""} ${
                      isListening ? "listening" : ""
                    }`}  onClick={handleMicClick}>
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
                      <Button1
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
                      priority
                    />
                    <Image
                      src={hand}
                      className="img-fluid right-hand"
                      style={{ marginRight: "5rem" }}
                      alt="hand"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-b-space services_section"
        id="feature-section"
      >
        <div className="container">
          <div className="text-white text-center">
            <Heading1
              title1=" Unlock the"
              spanstyle={{ color: "#ffce00" }}
              spantitle="Power of AI"
              title=" Supercharge Your Business Communications"
            />

            <Para
              style={{ fontSize: "17.615px" }}
              className="service-content"
              paragraph="AI Talk Assist automates routine calls, handles appointment
              setting, and manages customer queries, allowing you to focus on
              strategic initiatives. Save time, reduce operational costs, and
              provide a seamless customer experience—day or night."
            />
          </div>
          <AboutBoxes layout={true} shadow="none" Box={Box} showbutton={false} />
          <Button1   style={{
              position: "relative",
              marginTop: "-1.5rem",
              padding: "13px 32px",
              left: "43%"
            }}
            click={handleOpenModal}
            title="Book a Demo"
            className="btn btn-theme d-sm-inline-block d-none " />
        </div>
      </section>
      <section
        className="ai-features-section section-b-space service-section"
        id="how-it-work"
        style={{paddingTop: "178px"}}
      >
        <div className="container">
          <div
            className="ai-features-heading text-center text-white"
            style={{ lineHeight: "1.3" }}
          >
            <H2
              spanstyle={{ color: "#ffce00" }}
              title="AI Talk Assist:"
              secondtitle="Automated Calls,"
              title2="Human-Like Conversations"
              headingstyle={{width: "auto", position: "relative", }}
              breakpoint={false}
            />
            <Headingh3 title="Effortless Communication, Maximum Efficiency" />

            <Para
              paragraph="Transform your customer interactions with AI Talk Assist. Our intelligent, conversational AI makes
                    and receives calls with a natural flow, just
                    like talking to a real person. Pre-qualify leads, set appointments, and follow up automatically—all
                    while increasing conversion rates and freeing
                    up your team’s valuable time. Fully customizable and seamlessly integrated with your CRM, AI Talk
                    Assist is available 24/7, reducing costs and
                    ensuring your business is always ready to grow. Plus, it’s built with security and scalability in
                    mind, adapting as your business evolves."
            />
          </div>

          <div className="ai-features-container">
            <div className="ai-vertical-line"></div>
            <AiFeatureBox AiFeatureBoxapi={AiFeatureBoxapi} />
          </div>
        </div>
      </section>
      <Testimonial testimonials={testimonials} />
      <section class="faq-section" id="faq-section">
        <div class="container">
          <div class="title-basic text-center" style={{ marginBottom: "6rem" }}>
            <h1 style={{ color: "#ffce00" }}>FAQ</h1>
            <h1 class="text-white">Frequently Asked Questions</h1>
            <br />
          </div>
          <div class="row ">
            <FAQ Faq={Faq} circleData={circleData} />
          </div>
        </div>
      </section>
      <div class="section-b-space">
        <div class="container">
            <div class="heading">
                <div class="title-basic">
                    <h1 class="text-white">Book a <span style={{color: "#ffce00"}}>Demo</span></h1>
                    <Para style={{marginBottom: "6rem",fontFamily: "'Outfit', sans-serif", fontSize: "20.6px", fontWeight: "500"}} paragraph="Ready to see
                        AI Talk Assist in action? Schedule your FREE demo now and discover how it can transform your
                        customer interactions and boost
                        productivity! Pick a time that works best for you below." />
                </div>
            </div>

            <iframe class="calendly-inline-widget"
                src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                style={{width:"100%",height:"700px"}}></iframe>

        </div>
    </div>
      <CalltoAction
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} style={{width: "297px"}} className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
        <OffcanvasHeader toggle={toggleOffcanvas} className="navbar-shadow d-flex align-items-center">
          <Heading5 title="Back" className="mb-0 back" />
          <Button color="link" className="btn-close" onClick={toggleOffcanvas}>
              <i class="ri-close-line"></i>
          </Button>
        </OffcanvasHeader>
        <OffcanvasBody className="offcanvas-body">
          <Nav vertical className="navbar-nav">
            <NavItem className={`nav-item1 ${router.pathname === '/' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className={`nav-item1 ${router.pathname === '/aboutus' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/aboutus">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className={`nav-item1 dropdown ${router.pathname.startsWith('/services') ? 'active' : ''}`}>
      <NavLink className="nav-link1 " href="/services" onClick={(e) => { e.preventDefault(); }} id="servicesLink">
        Services
        <span onClick={toggleDropdown} style={{ cursor: 'pointer', marginLeft: '7.5rem' }}>
          {dropdownOpen ? <i class="ri-arrow-up-s-fill"></i>: <i class="ri-arrow-down-s-fill"></i>}
        </span>
      </NavLink>
      <ul className={`dropdown-menu sidebar-navlinks ${dropdownOpen ? 'show' : ''}`} aria-labelledby="servicesLink">
        <li>
          <Link className="dropdown-item1" href="/services/StrategicCounseling">
            Strategic Counseling
          </Link>
        </li>
        <li>
          <Link className="dropdown-item1" href="/services/AitalkAssist">
            AITalkAssist
          </Link>
        </li>
        <li>
          <Link className="dropdown-item1" href="/services/TrainingEducation">
            Training & Education
          </Link>
        </li>
      </ul>
    </NavItem>
            <NavItem className={`nav-item1 ${router.pathname === '/blog' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/blog">
                Blog
              </NavLink>
            </NavItem>
            <NavItem className={`nav-item1 ${router.pathname === '/contact' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/contact">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default AitalkAssist;
