"use client";
import Navbar from "@/Componenets/home/Header";
import Service from "@/Componenets/home/Services";
import Expertise from "@/Componenets/home/Expertise";
import Team from "@/Componenets/home/Team";
import LatestNews from "@/Componenets/home/LatestNews";
import Testimonial from "@/Componenets/home/CalltoAction";
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
import BlogApi from "./blog/blogapi.json";
import Model from "@/Componenets/model/Model";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Headingh2 from "@/Componenets/typography/h2/Heading2";
import Headingh3 from "@/Componenets/typography/h3/Headingh3";
import Heading1 from "@/Componenets/typography/h1/Heading1";
import MainBox from "@/Componenets/mainbox/MainBox";
import Button from "@/Componenets/typography/button/Button";
import Mic from "@/Componenets/mic/Mic";
import BlogBox from "@/Componenets/Blogcomponent/BlogBox";
import CalltoAction from "@/Componenets/home/CalltoAction";
import TeamBox from "./teamapi.json";
import Head from "next/head";

export default function Page() {
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioInstance = new Audio("/assets/audio/heather-audio.wav");
    setAudio(audioInstance);
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []);

  const handleMicClick = () => {
    setIsLoading(true);
    setIsListening((prev) => {
      if (prev) {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          setIsLoading(false);
        }
      } else {
        audio.play();
      }
      return !prev;
    });
  };
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const ServiceBox = [
    {
      id: 1,
      image1: ExpertGuide,
      image2: ExpertGuideBold,
      image3: ServiceTitle,
      title: "Expert Guidance:",
      para: "Unlock unparalleled insights and guidance for AI consulting and product solutions.",
      columnclass: "col-sm-6",
      firstChildClass: "service-box",
      secondChildClass: "service-icon",
      firstimageclass: "img-fluid outline-icon",
      secondimageClass: "img-fluid bold-icon",
      contentclass: "service-content",
      layout: false,
    },
    {
      id: 2,
      image1: CuttingEdge,
      image2: CuttingEdgeBold,
      image3: ServiceTitle,
      title: "Cutting-Edge Technology",
      para: "Access tailored AI products for staying ahead in todays landscape.",
      columnclass: "col-sm-6",
      firstChildClass: "service-box",
      secondChildClass: "service-icon",
      firstimageclass: "img-fluid outline-icon",
      secondimageClass: "img-fluid bold-icon",
      contentclass: "service-content",
      layout: false,
    },
    {
      id: 3,
      image1: StreamLine,
      image2: StreamLineBold,
      image3: ServiceTitle,
      title: "Streamlined Training",
      para: "Equip your team with AI expertise for confident navigation.",
      columnclass: "col-sm-6",
      firstChildClass: "service-box",
      secondChildClass: "service-icon",
      firstimageclass: "img-fluid outline-icon",
      secondimageClass: "img-fluid bold-icon",
      contentclass: "service-content",
      layout: false,
    },
  ];
  const Services = [
    {
      id: 1,
      main: "about-section section-b-space section-mb-space",
      heading: "Strategic Consulting.",
      title1: "What we",
      title2: "Offer",
      number: "01.",
      paragraph:
        "Crafting influential content requires a deep understanding of your target audience. Pinpoint your ideal demographic and familiarise yourself with their needs, passions, and sources of concern.",
      ticktitle: [
        "Attract your audience with captivating facts in your commercials",
        "Let’s engage with the customers effectively",
        "Brighten up your content with appealing graphics: pictures, clips, and graphs that will fascinate your users!",
      ],
      image: Strategic,
      imgWidth: "100%",
      imgHeight: "auto",
      aos: "fade-left",
      link: "/services/StrategicCounseling",
      layout: false,
    },
    {
      id: 2,
      main: "about-section right-version section-b-space section-mb-space",
      heading: "AI Talk Assist",
      number: "02.",
      aos: "fade-right",
      paragraph: `"Experience the convenience of AI-driven calls. Let technology handle your communication needs effortlessly, saving you time and hassle."`,
      ticktitle: [
        "AI Talk Assist – AI-driven tool for personalized",
        "24/7 customer service.",
        "CRM Integration – Connects with your CRM for valuable insights.",
        "Automates Tasks – Manages lead generation, appointment scheduling, and support.",
      ],
      image: AiSolution,
      imgWidth: "100%",
      imgHeight: "auto",
      link: "/services/AitalkAssist",
      color: "rgb(0 189 255)",
      layout: true,
    },
    {
      id: 3,
      main: "about-section section-b-space",
      heading: "Training & Education",
      aos: "fade-left",
      number: "03.",
      paragraph:
        "Experience the power of 4irinc AI and revolutionise your social media presence. Say goodbye to writer's block and hello to compelling hashtags, captivating captions, and endless content possibilities.",
      ticktitle: [
        "Curate endless content possibilities that make your website shine.",
        "Generates compelling hashtags that skyrocket your reach",
        "Unlock a world of unlimited content ideas that keep your followers hooked.",
      ],
      link: "/services/TrainingEducation",
      image: Training,
      imgWidth: "100%",
      imgHeight: "auto",
      layout: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Fourth Industrial Revolution Inc.</title>
      </Head>
      <Navbar
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      {showModal && <Model close={handleCloseModal} />}
      <section id="home" className="section-b-space gradiant-color banner-img home-section">
        <div className="container-fluid">
          <div className="home-sec home-heading1">
            <div className="home-content">
              <div className="home-contents">
                <div>
                  <Headingh2
                    title="FOURTH INDUSTRIAL REVOLUTION INC"
                    headingstyle={{
                      fontSize: "20px",
                      fontFamily: "'Play', sans-serif",
                    }}
                    spanstyle={{ padding: "0px 20px" }}
                  />
                </div>
                <Heading1
                  className="home-h1"
                  spantitle="EMPOWER YOUR BUSINESS"
                  spanstyle={{ color: "#ffce00" }}
                  title="WITH AI-DRIVEN SUCCESS"
                  breakpoint={true}
                />
                <div className="d-flex flex-row gap-3 home_links">
                  <Button
                    click={handleOpenModal}
                    className="btn-solid"
                    title="Book a Demo"
                    icon={faArrowRight}
                  />
                </div>
              </div>
            </div>
            <div className="home-img d-lg-flex d-none">
              <Image
                src={Robot}
                className="img-fluid robot-img"
                alt="robot"
                priority
              />
              <div className="round-effect">
                <Image
                  src={RoundBlue}
                  style={{ willChange: "transform" }}
                  className="img-fluid "
                  alt="robot"
                  priority
                />
              </div>
              <ul className="home-effect">
                <li>
                  <Image
                    src={Effect}
                    className="img-fluid effect-img"
                    alt=""
                    priority
                  />
                  <Image
                    src={DrivenSolution}
                    className="img-fluid outline-icon"
                    alt=""
                    priority
                  />
                  AI-Driven Solutions
                </li>
                <li>
                  <Image
                    src={Effect}
                    className="img-fluid effect-img"
                    alt=""
                    priority
                  />
                  <Image
                    src={Graph}
                    className="img-fluid outline-icon"
                    alt=""
                    priority
                  />{" "}
                  Business Growth Strategies
                </li>
                <li>
                  <Image
                    src={Effect}
                    className="img-fluid effect-img"
                    alt=""
                    priority
                  />
                  <Image
                    src={Innovative}
                    className="img-fluid outline-icon"
                    alt=""
                    priority
                  />
                  Innovative Tech Consulting
                </li>
                <li>
                  <Image
                    src={Effect}
                    className="img-fluid effect-img"
                    alt=""
                    priority
                  />
                  <Image
                    src={Text}
                    className="img-fluid outline-icon"
                    alt=""
                    priority
                  />{" "}
                  Advanced Training Programs
                </li>
                <li>
                  <Image
                    src={Effect}
                    className="img-fluid effect-img"
                    alt=""
                    priority
                  />
                  <Image
                    src={AiAppointment}
                    className="img-fluid outline-icon"
                    alt=""
                    priority
                  />{" "}
                  AI Appointment Marketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* hello */}
      <div className="service-section section-b-space expertise homeabout-sec" style={{
        background: 'linear-gradient(180.02deg, rgba(245, 245, 245, 0.05) 0.02%,rgba(245, 245, 245, 0) 90.86%)'}}>
      <div className="container">
        <Headingh2
          title="About Us"
          headingstyle={{
            fontSize: "40px",
            position: "relative",
            bottom: "5.5rem",
            fontWeight: "400",
          }}
          className="text-white home-heading"
        />
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh2
                    headingstyle={{ color: "#fff", width: "auto" }}
                    spanstyle={{ color: "#ffce00" }}
                    title=" Empowering Your Business"
                    secondtitle=" In With AI Consulting And Product Solutions"
                  />
                  <Headingh3
                    showimage={false}
                    title="In the digital world, our AI Writer supports a variety of
                      artists"
                    style={{ color: "#00BDFF" }}
                  />
                </div>
                <Para
                  paragraph="At Fourth Industrial Revolution Inc., we are dedicated to
                    guiding businesses through the transformative power of
                    artificial intelligence. With a team of seasoned experts at
                    the helm, specializing in AI consulting and product
                    solutions, we provide tailored AI solutions that propel your
                    business into the future. Our mission is simple yet
                    ambitious: to empower organizations to thrive in the dynamic
                    landscape of the Fourth Industrial Revolution."
                  style={{ textAlign: "justify" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6" style={{ marginRight: "-195px" }}>
            <Mic
              isListening={isListening}
              isLoading={isLoading}
              handleMicClick={handleMicClick}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="service_boxes_div">
            <MainBox ServiceBox={ServiceBox} />
          </div>
        </div>
      </div>
    </div >
      <Service Services={Services} />
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
        ServiceBox={TeamBox}
        layout={false}
      />
      <section className="news-section section-b-space">
        <div className="container">
          <Headingh3 title="LATEST NEWS" className="text-white text-center" />
        </div>
        <Heading1
          className="title-basic text-white"
          spanstyle={{ color: "#ffce00" }}
          title1="Innovation"
          spantitle="Insights"
        />
        <div className="container">
          <div className="row news_container">
            <BlogBox Blogapi={BlogApi} icon={faArrowRight} />
          </div>
        </div>
      </section>
      <div>
        <div></div>
      </div>
      <CalltoAction
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
    </>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "Fourth Industrial Revolution",
    description: "Home page",
  };
}
