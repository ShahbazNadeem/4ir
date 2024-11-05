import Banner from "@/Componenets/about/Banner";
import Detail from "@/Componenets/about/Detail";
import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Header";
import Testimonial from "@/Componenets/home/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import RealEstate from "@/images/blue service icon/RealEstate.png";
import Insurance from "@/images/blue service icon/Insurance.png";
import Mortgage from "@/images/blue service icon/Mortgage.png";
import Healthcare from "@/images/blue service icon/Healthcare.png";
import Education from "@/images/blue service icon/Education.png";
import Retail from "@/images/blue service icon/Healthcare.png";
import Image from "next/image";
import Headingh2 from "@/Componenets/typography/H2/H2";
import Headingh4 from "@/Componenets/typography/h4/H4";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Strategic from "@/images/services/strategicconsulting.png";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LearnBtn from "@/Componenets/button/LearnMorebtn";
import AboutBoxes from "@/Componenets/about/AboutBoxes";
export default function Services() {
  const Box = [
    {
      id: 1,
      image: Strategic,
      heading: "TAILORED STRATEGIES FOR BUSINESS SUCCESS",
      title: "Drive Growth with Strategic Consulting",
      para: "Our strategic consulting service is designed to help businesses identify opportunities, address challenges,and develop a roadmap for sustained growth. With a focus on AI integration, we ensure your business is prepared for the future of digital transformation.",
    },
    {
      id: 2,
      image: AiSolution,
      heading: "CUTTING-EDGE AI SOLUTIONS FOR EFFICIENCY",
      title: "Enhance Operations with AI-Powered Solutions",
      para: "We offer custom AI solutions that automate and optimize key business functions. From AI-powered CRM tools to virtual assistants, our solutions are tailored to enhance your operations, reduce costs, and boost productivity across your organization.",
    },
    {
      id: 3,
      image: Training,
      heading: "CUSTOMIZED AI TRAINING PROGRAMS",
      title: "Empower Your Team with Training & Education",
      para: "Our AI training programs are designed to upskill your team, equipping them with the tools and knowledge they need to harness AI and digital technologies. We provide tailored courses that foster innovation, improve efficiency, and drive business growth.",
    },
  ];
  return (
    <>
      <Navbar />
      <Banner
        layout={true}
        title="OUR SERVICES"
        paragraph="AI Products and Solutions by Fourth Industrial Revolution Inc."
      />
      <div className="service-section section-b-space mt-2">
        <div className="container">
          <div className="row g-5">
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh4 heading="Innovative AI Solutions for Business Growth" />
                  <Headingh2
                    title="AI Products and Solutions"
                    secondtitle="by Fourth Industrial Revolution Inc."
                  />
                </div>
                <Para paragraph="Transform your business with cutting-edge AI technologies and strategic expertise. We offer a range of services designed to drive growth, streamline operations, and empower your team for success in the AI-driven future." />

                <AboutBoxes Box={Box} icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row g-5">
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh4 heading="AI Solutions Across Diverse Industries" />
                  <h2 class="text-white">Industries <span style={{color: "#ffce00"}}>We Serve</span>
                  </h2>
                </div>
                <Para paragraph="At Fourth Industrial Revolution Inc., we serve a diverse range of industries, helping businesses from various sectors embrace AI and digital transformation. From finance to healthcare, retail to manufacturing, our solutions are tailored to meet the unique challenges of your industry." />
                <span
                  style={{ fontSize: "0.90rem", color: "rgb(156 157 159)" }}
                >
                  We build long-term partnerships based on trust, transparency,
                  and a shared vision for success. Our holistic approach ensures
                  we not only provide the right technology but also foster a
                  culture of innovation and continuous improvement.
                </span>
                <br />
                <br />
                <span
                  style={{ fontSize: "0.90rem", color: "rgb(156 157 159)" }}
                >
                  No matter where you are in your digital transformation
                  journey, we're here to guide you every step of the way.
                  Contact us today to learn how we can help your business thrive
                  in the Fourth Industrial Revolution.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="feature-section section-b-space">
        <div className="container">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar]}
          >
            <SwiperSlide>
              <div
                className="row g-xxl-5 g-4"
                style={{ display: "flex", gap: "2rem" }}
              >
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={RealEstate} alt="Real Estate" />
                    <h4 className="expertise_text">Real Estate</h4>
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Insurance} alt="Finance & Insurance Market" />
                    <h4 className="expertise_text">
                      Finance & Insurance Market
                    </h4>
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Mortgage} alt="Mortgage" />
                    <h4 className="expertise_text">Mortgage</h4>
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
                    <Image src={Healthcare} alt="Health Care" />
                    <h4 className="expertise_text">Health Care</h4>
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Education} alt="Education" />
                    <h4 className="expertise_text">Education</h4>
                  </article>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <article className="expertise_box">
                    <Image src={Retail} alt="Retail" />
                    <h4 className="expertise_text">Retail</h4>
                  </article>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Testimonial />
      <Footer />
    </>
  );
}
