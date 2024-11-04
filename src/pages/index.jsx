import Navbar from "@/Componenets/home/Navbar";
import Service from "@/Componenets/home/Services";
import Expertise from "@/Componenets/home/Expertise";
import Team from "@/Componenets/home/Team";
import LatestNews from "@/Componenets/home/LatestNews";
import Testimonial from "@/Componenets/home/Testimonial";
import Footer from "@/Componenets/home/Footer";
import Image from "next/image";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ExpertGuide from "@/images/bold services icon/ExpertGuidence.png";
import ExpertGuideBold from "@/images/bold services icon/ExpertGuidenceBold.png";
import CuttingEdge from "@/images/bold services icon/Cutting-EdgeTechnology.png";
import CuttingEdgeBold from "@/images/bold services icon/Cutting-EdgeTechnologybold.png";
import StreamLine from "@/images/bold services icon/Streamlined.png";
import StreamLineBold from "@/images/bold services icon/StreamlinedBold.png";
import ServiceTitle from "../../public/assets/svg/service-title.svg";
import Robot from "@/images/landing/robot.png";
import RoundBlue from "@/images/landing/RoundBlue.gif";
import Effect from "@/images/landing/effect.png";
import DrivenSolution from "@/images/AI-DrivenSolutions.png";
import Graph from "../../public/assets/svg/service/graph.svg";
import Text from "../../public/assets/svg/service/text.svg";
import Innovative from "@/images/InnovativeTechConsulting.png";
import AiAppointment from "@/images/AIAppointmentMarketing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Strategic from "@/images/services/strategicconsulting.png";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import Feature from "@/images/feature.gif";
import Featurebg from "@/images/feature-bg.png";
import Person1 from "@/images/team/BarryKrevoy.png";
import Person2 from "@/images/team/ShaneKrevoy.png";
import BlogApi from "./blogapi.json"
export default function Page() {
  const [isListening, setIsListening] = useState(false);
  const [audio, setAudio] = useState(null); // Initialize audio as null
  const [isAnimating, setIsAnimating] = useState(false); // State for animation

  // Use useEffect to create audio instance on the client side
  useEffect(() => {
    const audioInstance = new Audio("/assets/audio/audio.mp3");
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

  return (
    <>
      <Navbar />
      <section id="home" className="section-b-space home-section">
        <div className="container-fluid">
          <div className="home-sec">
            <div className="home-content">
              <div className="home-contents">
                <div>
                  <h2 style={{ fontSize: "20px" }}>
                    FOURTH INDUSTRIAL REVOLUTION INC
                  </h2>
                </div>

                <h1>
                  {" "}
                  <span style={{ color: "#ffce00" }}>
                    EMPOWER YOUR BUSINESS
                  </span>{" "}
                  <br />
                  WITH AI-DRIVEN SUCCESS
                </h1>
                <div className="d-flex flex-row gap-3 home_links">
                  <div
                    className="btn-solid"
                    data-bs-toggle="modal"
                    data-bs-target="#demo-modal"
                  >
                    Book a Demo
                    <FontAwesomeIcon icon={faArrowRight} />
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-img d-lg-flex d-none">
              <Image src={Robot} className="img-fluid robot-img" alt="robot" />
              <div className="round-effect">
                <Image
                  src={RoundBlue}
                  style={{ willChange: "transform" }}
                  className="img-fluid "
                  alt="robot"
                />
              </div>
              <ul className="home-effect">
                <li>
                  <Image src={Effect} className="img-fluid effect-img" alt="" />
                  <Image
                    src={DrivenSolution}
                    className="img-fluid outline-icon"
                    alt=""
                  />
                  AI-Driven Solutions
                </li>
                <li>
                  <Image src={Effect} className="img-fluid effect-img" alt="" />
                  <Image
                    src={Graph}
                    className="img-fluid outline-icon"
                    alt=""
                  />{" "}
                  Business Growth Strategies
                </li>
                <li>
                  <Image src={Effect} className="img-fluid effect-img" alt="" />
                  <Image
                    src={Innovative}
                    className="img-fluid outline-icon"
                    alt=""
                  />
                  Innovative Tech Consulting
                </li>
                <li>
                  <Image src={Effect} className="img-fluid effect-img" alt="" />
                  <Image
                    src={Text}
                    className="img-fluid outline-icon"
                    alt=""
                  />{" "}
                  Advanced Training Programs
                </li>
                <li>
                  <Image src={Effect} className="img-fluid effect-img" alt="" />
                  <Image
                    src={AiAppointment}
                    className="img-fluid outline-icon"
                    alt=""
                  />{" "}
                  AI Appointment Marketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="service-section section-b-space">
        <div className="container">
          <p
            style={{ fontSize: "40px", position: "relative", bottom: "1rem" }}
            className="text-white"
          >
            About Us
          </p>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="service-info">
                <div>
                  <div className="title">
                    <h2 style={{ color: "#fff" }}>
                      <span style={{ color: "#ffce00" }}>
                        Empowering Your Business
                      </span>{" "}
                      In With AI Consulting And Product Solutions
                    </h2>
                    <h3 style={{ color: "#00BDFF" }}>
                      In the digital world, our AI Writer supports a variety of
                      artists
                    </h3>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    At Fourth Industrial Revolution Inc., we are dedicated to
                    guiding businesses through the transformative power of
                    artificial intelligence. With a team of seasoned experts at
                    the helm, specializing in AI consulting and product
                    solutions, we provide tailored AI solutions that propel your
                    business into the future. Our mission is simple yet
                    ambitious: to empower organizations to thrive in the dynamic
                    landscape of the Fourth Industrial Revolution.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mic-sec">
                <div className="mic-div">
                  <button
                    type="button"
                    className={`mic ${isAnimating ? "animating" : ""} ${
                      isListening ? "listening" : ""
                    }`}
                    onClick={handleMicClick}
                  >
                    <FontAwesomeIcon
                      icon={faMicrophone}
                      style={{ color: "#65bada" }}
                    />
                    <canvas className="visualizer"></canvas>
                  </button>
                  <div className="mic_text">Give it a try!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service_boxes_div">
              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <Image
                      src={ExpertGuide}
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <Image
                      src={ExpertGuideBold}
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <Image
                        src={ServiceTitle}
                        alt="effect"
                        className="img-fluid"
                      />
                      Expert Guidance:
                    </h3>
                    <p>
                      Unlock unparalleled insights and guidance for AI
                      consulting and product solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <Image
                      src={CuttingEdge}
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <Image
                      src={CuttingEdgeBold}
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <Image
                        src={ServiceTitle}
                        alt="effect"
                        className="img-fluid"
                      />
                      Cutting-Edge Technology
                    </h3>
                    <p>
                      Access tailored AI products for staying ahead in todays
                      landscape.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="service-box">
                  <div className="service-icon">
                    <Image
                      src={StreamLine}
                      className="img-fluid outline-icon"
                      alt=""
                    />
                    <Image
                      src={StreamLineBold}
                      className="img-fluid bold-icon"
                      alt=""
                    />
                  </div>
                  <div className="service-content">
                    <h3>
                      <Image
                        src={ServiceTitle}
                        alt="effect"
                        className="img-fluid"
                      />
                      Streamlined Training
                    </h3>
                    <p>
                      Equip your team with AI expertise for confident
                      navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service
        main="about-section section-b-space section-mb-space"
        heading="Strategic Consulting."
        number="01."
        paragraph="Crafting influential content requires a deep understanding of your target audience.
                                Pinpoint your ideal demographic and familiarise yourself with their needs, passions, and
                                sources of concern."
        ticktitle1="Attract your audience with captivating facts in your commercials"
        ticktitle2="Let’s engage with the customers effectively"
        ticktitle3="Brighten up your content with appealing graphics: pictures, clips, and graphs that will fascinate your users!"
        image={Strategic}
        imgWidth="100%"
        imgHeight="80%"
        layout={false}
      />
      <Service
        main="about-section right-version section-b-space section-mb-space"
        heading="AI Talk Assist"
        number="02."
        paragraph="Experience the convenience of AI-driven calls. Let technology handle your communication
                                needs effortlessly, saving you time and hassle."
        ticktitle1="AI Talk Assist – AI-driven tool for personalized"
        ticktitle2=" 24/7 customer service."
        ticktitle3="CRM Integration – Connects with your CRM for valuable insights."
        ticktitle4="Automates Tasks – Manages lead generation, appointment scheduling, and support."
        image={AiSolution}
        imgWidth="100%"
        imgHeight="80%"
        layout={true}
      />
      <Service
        main="about-section section-b-space"
        heading="Training & Education"
        number="03."
        paragraph="Experience the power of 4irinc AI and revolutionise your social media presence. Say goodbye to writer's block and hello to compelling hashtags, captivating captions, and endless content possibilities."
        ticktitle1="Curate endless content possibilities that make your website shine."
        ticktitle2="Generates compelling hashtags that skyrocket your reach"
        ticktitle3="Unlock a world of unlimited content ideas that keep your followers hooked."
        image={Training}
        imgWidth="100%"
        imgHeight="80%"
        layout={false}
      />
      <Expertise
        expertise="Our Expertise"
        heading1="Driving Innovation"
        heading2="Forward"
        para="At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Explore our diverse skill set and experience in cutting-edge technologies, including machine learning algorithms and natural language processing. We're equipped to tackle your toughest challenges and empower your organization to thrive in the dynamic landscape of the Fourth Industrial Revolution."
      />
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
        layout={false}
      />
      <LatestNews heading="LATEST NEWS" title1="Innovation" title2="Insight" Blogapi={BlogApi} icon={faArrowRight} />
      <Testimonial />
      <Footer />
    </>
  );
}
