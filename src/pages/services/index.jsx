import Banner from "@/Componenets/about/Banner";
import Detail from "@/Componenets/about/Detail";
import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Header";
import Testimonial from "@/Componenets/home/CalltoAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import RealEstate from "@/images/blue service icon/RealEstate.png";
import Insurance from "@/images/blue service icon/Insurance.png";
import Mortgage from "@/images/blue service icon/Mortgage.png";
import Healthcare from "@/images/blue service icon/Healthcare.png";
import Education from "@/images/blue service icon/Education.png";
import Retail from "@/images/blue service icon/Healthcare.png";
import Image from "next/image";
import Headingh2 from "@/Componenets/typography/h2/Heading2";
import Headingh4 from "@/Componenets/typography/h4/H4";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Strategic from "@/images/services/strategicconsulting.png";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AboutBoxes from "@/Componenets/about/AboutBoxes";
import { useState } from "react";
import Span from "@/Componenets/typography/span/Span";
import H2 from "@/Componenets/typography/h2/Heading2";
import CalltoAction from "@/Componenets/home/CalltoAction";
import Head from "next/head";
export default function Services() {
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
      image: Strategic,
      heading: "TAILORED STRATEGIES FOR BUSINESS SUCCESS",
      title: "Drive Growth with Strategic Consulting",
      para: "Our strategic consulting service is designed to help businesses identify opportunities, address challenges,and develop a roadmap for sustained growth. With a focus on AI integration, we ensure your business is prepared for the future of digital transformation.",
      link:"/services/StrategicCounseling"
    },
    {
      id: 2,
      image: AiSolution,
      heading: "CUTTING-EDGE AI SOLUTIONS FOR EFFICIENCY",
      title: "Enhance Operations with AI-Powered Solutions",
       link:"/services/AitalkAssist",
      para: "We offer custom AI solutions that automate and optimize key business functions. From AI-powered CRM tools to virtual assistants, our solutions are tailored to enhance your operations, reduce costs, and boost productivity across your organization.",
    },
    {
      id: 3,
      image: Training,
      heading: "CUSTOMIZED AI TRAINING PROGRAMS",
      title: "Empower Your Team with Training & Education",
       link:"/services/TrainingEducation",
      para: "Our AI training programs are designed to upskill your team, equipping them with the tools and knowledge they need to harness AI and digital technologies. We provide tailored courses that foster innovation, improve efficiency, and drive business growth.",
    },
  ];
  return (
    <>
    <Head>
        <title>Fourth Industrial Revolution Inc.</title>
      </Head>
      <Navbar />
      <Banner
        layout={true}
        title="OUR SERVICES"
        paragraph="AI Products and Solutions by Fourth Industrial Revolution Inc."
         widthclass="35%"
         marginLeft= "50px"
      />
      <div className="service-section services section-b-space mt-2"style={{paddingTop: "178px", backgroundColor: "#0b1622"}}>
        <div className="container">
          <div className="row g-5">
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh4 style={{color:"rgb(0 189 255)"}} heading="Innovative AI Solutions for Business Growth" />
                  <Headingh2 className="text-white"
                  spanstyle={{color: "#ffce00"}}
                    title="AI Products and Solutions"
                    secondtitle="by Fourth Industrial Revolution Inc."
                  />
                </div>
                <Para  className="mb-5" style={{ fontSize: "19.2px", fontFamily: "'Outfit', sans-serif" ,width: "80%" }}
paragraph="Transform your business with cutting-edge AI technologies and strategic expertise. We offer a range of services designed to drive growth, streamline operations, and empower your team for success in the AI-driven future." />

                <AboutBoxes layout={true}  Box={Box} icon={faArrowUp} showbutton={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row g-5">
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh4 style={{color:"rgb(0 189 255)"}}  heading="AI Solutions Across Diverse Industries" />
                  <H2 className="text-white" title1="Industries" spanstyle={{color: "#ffce00"}} title=" We Serve" />
    
                </div>
                <Para style={{fontSize: "1.2rem"}} paragraph="At Fourth Industrial Revolution Inc., we serve a diverse range of industries, helping businesses from various sectors embrace AI and digital transformation. From finance to healthcare, retail to manufacturing, our solutions are tailored to meet the unique challenges of your industry." />
                <br />
                <Span style={{ fontSize: "17.4px", color: "rgb(156 157 159)" }} title="We build long-term partnerships based on trust, transparency,
                  and a shared vision for success. Our holistic approach ensures
                  we not only provide the right technology but also foster a
                  culture of innovation and continuous improvement." />
                <br />
                <Span style={{ fontSize: "17.4px", color: "rgb(156 157 159)" }} title=" No matter where you are in your digital transformation
                  journey, we are here to guide you every step of the way.
                  Contact us today to learn how we can help your business thrive
                  in the Fourth Industrial Revolution." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="feature-section section-b-space"style={{paddingBottom: "0px"}} >
        <div className="container">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            scrollbar={{ draggable: true }}
            modules={[ Scrollbar, Autoplay]}
          >
            <SwiperSlide>
              <div
                className="row g-xxl-5 g-4"
                style={{ display: "flex", gap: "2rem" }}
              >
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={RealEstate} alt="Real Estate" priority />
                    <Headingh4 className="expertise_text" heading="Real Estate" />
                  
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Insurance} alt="Finance & Insurance Market" priority />
                    <Headingh4 className="expertise_text" heading=" Finance & Insurance Market" />
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Mortgage} alt="Mortgage" priority />
                    <Headingh4 className="expertise_text" heading=" Mortgage" />
                    
                  </article>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="row g-xxl-5 g-4"
                style={{ display: "flex", gap: "2rem" }}
              >
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Healthcare} alt="Health Care" priority />
                    <Headingh4 className="expertise_text" heading=" Health Care" />
                  
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Education} alt="Education" priority />
                    <Headingh4 className="expertise_text" heading=" Education" />
                  
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Retail} alt="Retail" priority />
                    <Headingh4 className="expertise_text" heading=" Retail" />
                    
                  </article>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <CalltoAction handleOpenModal={handleOpenModal} showModal={showModal}handleCloseModal={handleCloseModal} />
      <Footer />
    </>
  );
}
