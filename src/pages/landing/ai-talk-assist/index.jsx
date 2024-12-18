import React from "react";
import Layout from "../../../Componenets/landing/layout";
// import "./leadgeneration.css";
import { useState, useEffect } from "react";
import SecondSecBox from "../../../Componenets/landing/Second-Section Box/Second-sec-box";
import Para from "../../../Componenets/landing/Typography/Para";
import { FiCheck } from "react-icons/fi";
import H1 from "../../../Componenets/landing/Typography/H1";
import H3 from "../../../Componenets/landing/Typography/H3";
import H5 from "../../../Componenets/landing/Typography/H5";
import H6 from "../../../Componenets/landing/Typography/H6";
import Card1 from "../../../Componenets/landing/cards/Card1";
import H2 from "../../../Componenets/landing/Typography/H2";
import Accordian from "../../../Componenets/landing/Accordian/Accordian";
import cardsStats from "../../../../public/assets/landingimage/cardsStats.png";
import Productstats from "../../../../public/assets/landingimage/ProductStat.png";
import MapSection from "../../../../public/assets/landingimage/vectors/MapSection.png";
import H4 from "../../../Componenets/landing/Typography/H4";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import Calltoaction from "../../../Componenets/landing/CalltoAction/Calltoaction";
import Slider from "../../../Componenets/landing/Slider";
import Card3 from "../../../Componenets/landing/cards/Card3";
import YoutubeVideo from "../../../Componenets/landing/YoutubeVideo";
import SiteLogo from "../../../Componenets/landing/SiteLogo";
import Head from "next/head";
import Model from "@/LandingComponent/Model/Model";
import { FaPlay } from "react-icons/fa";
import TawkToIntegration from '../../../Componenets/landing/TawkToIntegration';

export default function Index() {
  const SecondBox = [
    {
      id: 1,
      title: "Losing leads due to slow responses.",
    },
    {
      id: 2,
      title: "Overwhelmed by too many leads and not enough follow-ups.",
    },
    {
      id: 3,
      title: "Frustrated with outdated sales processes or limited AI tool",
    },
    {
      id: 4,
      title: "Trouble delivering personalized experiences for prospect.",
    },
    {
      id: 5,
      title: "Difficulty maintaining quality conversations across time zones.",
    },
    {
      id: 6,
      title: "Struggling to scale without skyrocketing costs.",
    },
  ];
  const Aicontent = [
    {
      id: 1,
      title: "Save Time, Boost Sales by 70%",
      para: "With our 100% Done-For-You solution, we handle everything from setup to customization, so you can focus on growing your business.",
    },
    {
      id: 2,
      title: "Always Evolving",
      para: "Our self-learning AI adapts to new technologies, keeping your business ahead of the curve without the need for constant upgrades",
    },
    {
      id: 1,
      title: "Secure & Scalable",
      para: "Bank-level encryption ensures your data stays safe, while our scalable platform grows with your business.",
    },
  ];
  const Accordianapi = [
    {
      id: 1,
      accordianid: "headingOne",
      collapseid: "collapseOne",
      datatargetid: "#collapseOne",
      title: "How will AI Talk Assist benefit my business?",
      value: true,
      show: "show",
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
    },
    {
      id: 2,
      accordianid: "headingTwo",
      collapseid: "collapseTwo",
      title: "How does it work?",
      datatargetid: "#collapseTwo",
      value: false,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
    },
    {
      id: 3,
      accordianid: "headingThree",
      collapseid: "collapseThree",
      title: "Is it easy to use?",
      datatargetid: "#collapseThree",
      value: false,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",
    },
    {
      id: 4,
      accordianid: "headingFour",
      collapseid: "collapseFour",
      title: "Is it secure?",
      datatargetid: "#collapseFour",
      value: false,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
        {
          liItems:
            "Regular Security Audits: We conduct regular security audits to identify and address potential vulnerabilities.",
        },
        {
          liItems:
            "Compliance with Regulations: We adhere to industry-specific regulations and data privacy standards.",
        },
      ],
      heading2:
        "By prioritizing security, we ensure the protection of your business and customer data.",

    },
  ];
  const IndustriesApi1 = [
    {
      id: 1,
      heading: "Real Estate",
      title1: "Automated Property Tours:",
      itle2: "Lead Qualification and Follow-Up: ",
      para1:
        "AI can guide potential buyers through virtual property tours, answering questions and providing detailed information.",
      para2:
        "AI can efficiently qualify leads, schedule appointments, and follow up with interested parties.",
      icon: "/assets/landingimage/vectors/Vector1.png",
      layout: true,
    },
    {
      id: 2,
      heading: "Financial Services",
      title1: "Customer Support and Inquiries:",
      title2: "Fraud Detection and Prevention:",
      para1:
        "AI can handle a wide range of customer inquiries, from account balances to loan applications.",
      para2:
        "AI can analyze voice patterns and detect potential fraudulent activity in real-time.",
      icon: "/assets/landingimage/vectors/Vector2.png",
      layout: true,
    },
    {
      id: 3,
      heading: "Healthcare",
      title1: "Patient Appointment Scheduling:",
      title2: "Telehealth Consultations:",
      para1:
        "AI can automate appointment scheduling, reminders, and confirmations.",
      para2:
        "AI can facilitate remote consultations, answering patient queries and providing basic medical advice.",
      icon: "/assets/landingimage/vectors/Vector3.png",
      layout: true,
    },
  ];
  const IndustriesApi2 = [
    {
      id: 4,
      heading: "E-commerce",
      title1: "Customer Service and Support:",
      title2: "Sales and Upselling:",
      para1:
        "AI-powered chatbots can assist customers with product information, order tracking, and returns.",
      para2:
        "AI can proactively reach out to customers, offer personalized recommendations, and upsell products.",
      icon: "/assets/landingimage/vectors/Vector4.png",
      layout: true,
    },
    {
      id: 5,
      heading: "Education",
      title1: "Student Support and Advising:",
      title2: "Online Tutoring:",
      para1:
        "AI can provide students with academic advice, answer questions, and offer guidance on course selection.",
      para2:
        "AI-powered tutoring systems can offer personalized learning experiences, adapting to each student's needs.",
      icon: "/assets/landingimage/vectors/Vector5.png",
      layout: true,
    },
    {
      id: 6,
      heading: "Telecommunications",
      title1: "Customer Onboarding and Support:",
      title2: "Sales and Upselling:",
      para1:
        "AI can guide customers through the onboarding process, troubleshoot issues, and provide technical support.",
      para2:
        "AI can identify upselling opportunities and offer tailored packages to customers.",
      icon: "/assets/landingimage/vectors/Vector6.png",
      layout: true,
    },
  ];
  const SliderData = [
    {
      id: 1,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "/images/testimonial.png",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 2,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "/images/testimonial.png",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 3,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "/images/testimonial.png",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 4,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "/images/testimonial.png",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
    {
      id: 5,
      clientName: "Sarah Afzal",
      country: "USA",
      img: "/images/testimonial.png",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest AI advancements without needing constant updates. It’s a true game-changer for our long-term growth and success!",
    },
  ];
  const WhyChooseAI = [
    {
      id: 1,
      title: "Seamless AI-to-AI Handoffs",
      description: "Handle more calls efficiently without interruptions.",
    },
    {
      id: 2,
      title: "Tailored for Your Industry",
      description:
        "Leverage pre-trained agents customized to fit your specific business needs.",
    },
    {
      id: 3,
      title: "Lightning-Fast Deployment",
      description:
        "Get up and running within 48 hours, no long wait times required",
    },
    {
      id: 4,
      title: "Enterprise-Grade Security",
      description:
        "Safeguard sensitive data with top-tier encryption and compliance standards.",
    },
    {
      id: 5,
      title: "Self-Learning AI",
      description:
        "Enjoy smarter, more effective interactions that continually improve over time",
    },
    {
      id: 6,
      title: "100% Done-For-You Setup",
      description:
        "Focus on growing your business while we handle the technical setup for a smooth launch.",
    },
  ];
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/assets/landingimage/heather-audio.wav"));
    }
  }, []);

  const handlePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleOpenModal = () => {
    setShowModal(!showModal);
  };
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <>

      {/* testing */}
      <Head>
        <title>4IR - AI Talk Assist</title>
      </Head>

      <Layout>
        {showModal && <Model close={handleOpenModal} />}
        <TawkToIntegration />
        <section>
          <div className="main-wrapper">
            <div className="container-fluid">
              <div class="main-banner">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 colum1">
                    <div className="figure">
                      <SiteLogo width={"66%"} height={"fit-content"} />
                    </div>
                    <H1
                      title="Supercharge Your Sales Teams With "
                      breakpoint={true}
                      spanTitle="AI-Driven Solutions."
                    />
                    <Para
                      title="Say goodbye to the stress of sales teams and hello to human-like AI that works 24/7."
                      className="bannerpara"
                    />
                    <div className="my-4 bannerSpandiv d-flex justify-content-start gap-5">
                      <span className="bannerSpan">
                        <FiCheck className="primary" /> No complex Software
                      </span>
                      <span className="bannerSpan">
                        <FiCheck className="primary" /> Easy-integration
                      </span>
                      <span className="bannerSpan">
                        <FiCheck className="primary" /> 24/7 Availability
                      </span>
                    </div>
                    <div className="banner-btn">
                      <button href="#" className="btn-1" onClick={handleOpenModal}>
                        Book a free Demo
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end align-items-center customScreen">
                    <div className="figure2 mt-5">
                      <YoutubeVideo src={"https://www.youtube.com/embed/tgbNymZ7vqY"} width="100%" height="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="second2-wrapper">
            <div className="container">
              <div class="second-session">
                <div className="row">
                  <div className="section2heading d-flex justify-content-center">
                    <H5
                      title="Sales can be tough — especially when you're juggling a mountain of leads, customer expectations, and an ever-changing market. If you're feeling the pressure, you're not alone. Many businesses face challenges that slow down growth and drain resources."
                      className="text-capitalize text-center section2h5"
                    />
                  </div>
                </div>
                <div className="row section2center">
                  <SecondSecBox SecondBox={SecondBox} />
                </div>
                <div className="section2bottom">
                  <H6
                    title="Are these common sales challenges holding your business back?"
                    className="section2h6"
                  />
                  <button className="btn-1" onClick={handleOpenModal}>Its Time To Make A Change</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section3-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section3-span1 text-white text-uppercase text-center">
                    introducing
                  </div>
                  <div className="section3-span1 primary text-uppercase text-center">
                    AI Talk Assist
                  </div>
                  <div className="section3-main  text-center d-flex justify-content-center">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: "100%" }}
                    >
                      <div className="line"></div>
                      <H5
                        title="The Revolutionary Voice AI Platform"
                        className="text-center section3h5 px-3 mb-0"
                      />
                      <div className="line"></div>
                    </div>
                  </div>
                  <Para
                    title="Transform your sales process in just two days—no long wait times, no hassle."
                    className="text-center section3para"
                  />

                  <div className="text-center section3btn">
                    <button className="btn-1" onClick={handleOpenModal}>Get Started with AI</button>
                  </div>
                </div>
              </div>

              <div class="custom-card-section">
                <div className="flex-card d-flex justify-content-center">
                  <Card1 content={Aicontent} layout={false} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section4-wrapper">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section4heading text-center">
                    <H1 title="Give It a Try" className="section4h1" />
                  </div>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section4-img d-flex justify-content-center">
                    <div
                      onClick={() => {
                        handlePlayPause();
                        toggleAnimation();
                      }}
                    >
                      {isAnimating ? (

                        <div
                          className={`audio-button ${isAnimating ? "animating" : ""}`}
                        >
                          <div className="wave-icon">
                            <div className="wave wave1"></div>
                            <div className="wave wave2"></div>
                            <div className="wave wave3"></div>
                            <div className="wave wave4"></div>
                            <div className="wave wave5"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="play-btn d-flex justify-content-center">
                          <FaPlay size={100} color="blue" className="ms-2" />
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="div col-lg-12 text-center">
                  <div className="section4bottom">
                    <H4
                      title="The AI landscape is constantly evolving. Outdated technology can hinder your growth."
                      className="section4h4"
                    />
                  </div>
                  <button className="btn-1" onClick={handleOpenModal}>Explore AI Talk Assets Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section5-wrapper">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section5heading">
                    <H1
                      title="How Does 4IR AI Voice Calling"
                      className="section5h1"
                    />
                    <H1 title="Exactly Work?" className="section5h1" />
                  </div>
                  <Para
                    title="Imagine a future where your lead generation process is automated, efficient, and highly effective. 4IR AI Voice Calling makes this a reality. Here's how it works:"
                    className="section5para1"
                  />
                </div>
              </div>

              <div class="fourth-section">
                <div className="row customborder section5-2ndrow">
                  <div className="col-lg-12 col-md-12 col-sm-12 custom-margin">
                    <H3
                      title="1. Lead Capture and CRM Integration"
                      className="section5h3"
                    />
                    <div className="d-flex align-items-center ">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>
                      <Para
                        title="Your sales or marketing team generates leads, which are then added to your CRM system."
                        className="section5para2"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>
                      <Para
                        title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data."
                        className="section5para2"
                      />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 text-white  CMargin">
                    <div className=" section5-quaters">
                      <Image src={cardsStats} className="cardsStats " alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 text-white">
                    <div className="customborder section5-quaters">
                      <Image src={Productstats} className="Productstats" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="fourth-section">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 customborder section5-2ndrow section5-CustomMargin section5-Customwidth">
                    <div className="">
                      <H3
                        title="2. Automated Outbound Calling"
                        className="section5h3"
                      />
                      <div className="d-flex align-items-center ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="The AI-powered system automatically dials leads, saving you time and resources."
                          className="section5para2"
                        />
                      </div>
                      <div className="d-flex align-items-center ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="It can handle a large volume of calls simultaneously, ensuring no lead is missed."
                          className="section5para2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6  customborder section5-2ndrow section5-Customwidth">
                    <div className="">
                      <H3
                        title="3. Intelligent Conversations"
                        className="section5h3"
                      />
                      <div className="d-flex align-items-center ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="The AI engages in natural, human-like conversations with leads."
                          className="section5para2"
                        />
                      </div>
                      <div className="d-flex align-items-center  ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="It can ask relevant questions, provide information, and even qualify leads based on predefined criteria."
                          className="section5para2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fourth-section">
                <div class="row">
                  <div className="col-lg-12 col-md-12 customborder section5-2ndrow">
                    <H3
                      title="4. Lead Capture and CRM Integration"
                      className="section5h3"
                    />
                    <div className="d-flex align-items-center ">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>
                      <Para
                        title="Your sales or marketing team generates leads, which are then added to your CRM system."
                        className="section5para2"
                      />
                    </div>
                    <div className="d-flex align-items-center ">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>

                      <Para
                        title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data."
                        className="section5para2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="fourth-section">
                <div className="row text-center section5lastpara">
                  <Para title="By automating these tasks, 4IR AI Voice Calling not only saves you time and money but also improves lead quality and conversion rates. It empowers your team to focus on higher-value activities, such as strategic planning and relationship building." />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section6-wrapper">
            <div className="container">
              <div className="row text-center">
                <div className="section6h1">
                  <H1
                    title="Industries Revolutionized by 4IR AI Voice Calling"
                    className="section5h1"
                  />
                </div>
                <Para
                  title="4IR AI Voice Calling is a versatile tool that can significantly impact various industries. Here are a few key sectors where this technology can be a game-changer:"
                  className="section6para1"
                />
              </div>

              <div className="row">
                <Card1 content={IndustriesApi1} layout={true} />
              </div>

              <div className="row">
                <div className="col-lg-12 MapSectiondiv">
                  <figure>
                    <Image
                      src={MapSection}
                      alt="Map Section"
                      className="MapSection"
                    />
                  </figure>
                </div>
              </div>

              <div className="row">
                <Card1 content={IndustriesApi2} layout={true} />
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="text-white text-center section6lastRow">
                    By automating routine tasks and improving customer
                    interactions, 4IR AI Voice Calling can help businesses in
                    these industries achieve greater efficiency, productivity,
                    and customer satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section7-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <h2 className="section7h2">
                    Why Choose<span className="primary"> AI Talk Assist?</span>
                  </h2>
                </div>

                <div className="d-flex justify-content-center flex-wrap align-items-center gap-3 custom-boxes">
                  {WhyChooseAI?.map((items, index) => (
                    <Card3 items={items} key={index} />
                  ))}
                </div>


                <div className="row">
                  <div className="text-center section7-btn">
                    <button className="btn-1" onClick={handleOpenModal}>Get Started with AI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center testimonial-heading w-100">
              <div className="line "></div>
              <H6 title="Client Reviews" />
              <div className="line"></div>
            </div>
          </div>

          <H3
            title="Don’t Just Take Our Word for It"
            className="section7h3 customsec7h3 text-center"
          />
          <div className="container">
            <Slider SliderData={SliderData} />
          </div>
        </section>

        <section className="calltoaction">
          <div className="calltoaction-wrapper">
            <div className="container">
              <Calltoaction />
            </div>
          </div>
        </section>

        <section className="asked-question">
          <div className="asked-question-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="frequently-question-content">
                    <H2 title="Frequently Asked Question" />
                    <Para title="Book a Demo if you have any more questions." />
                    <div class="accordion" id="accordionExample">
                      {Accordianapi?.map((items, index) => {
                        return <Accordian items={items} key={index} content={true} />;
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bookDemo-content">
                    <H2 title="Book a" spanTitle="Demo" breakpoint={true} />
                    <Para title="Ready to see AI Talk Assist in action? Schedule your FREE demo now and discover how it can transform your customer interactions and boost productivity! Pick a time that works best for you below." />
                    <iframe
                      className="calendly-inline-widget"
                      src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                      style={{ minWidth: "100%", height: "500px" }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
       /* @import url("../../../../public/assets/css/Global.css"); */

/* Chat bot */

.chat-bot-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-bot-modal {
  position: fixed;
  bottom: 10%;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  z-index: 999;
  animation: slideUp 0.3s ease-in-out;
}

.chat-bot-header {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.chat-bot-content {
  padding: 20px;
  font-size: 14px;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Close */



.main-wrapper {
  background-image: url("/assets/landingimage/bg-img.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px 150px;
}

.main-banner {
  min-height: 90vh;
  width: 100%;
  /* display: flex;
  align-items: center; */
}

.row1 {
  padding-top: 60px;
}

.figure img {
  max-width: 100%;
}

.bannerpara {
  margin: 30px 0px !important;
}

.bannerImg1 {
  width: 100%;
  height: auto;
}

.figure2 {
  width: 90%;
}

.bannerImg2 {
  border: 1px solid var(--primary);
  border-radius: 25px;
  width: 100%;
  height: auto;
}

.bannerSpan {
  font-size: 24px;
  color: var(--text);
  font-family: var(--font-roboto);
}

.circle {
  width: 10%;
}

.section7-wrapper h2 {
  font-weight: 600 !important;
}

.circle svg {
  font-size: 100px;
}

.section2bottom {
  text-align: center;
}

.section2h6 {
  margin: 50px 0px;
}

.section3-span1 {
  font-size: 128px;
  line-height: 130px;
  font-weight: 600;
  font-family: var(--font-instrument);
}

.section3h5 {
  position: relative;
  display: inline-block;
  text-align: center !important;
}

.card3:hover {
  background-color: var(--primary);
  transition: all.5s;
}

.card3:hover .card3-body>p {
  color: #fff !important;
  /* Ensure the correct variable is used */
}

.section3para {
  font-size: 32px;
  line-height: 30px;
}

.section3btn {
  margin: 80px 0px;
}

.section4-wrapper {
  margin: 100px 0px !important;
}

.section4h1 {
  color: var(--primary) !important;
  font-size: 86px !important;
  font-weight: 500 !important;
}

.section4-img {
  background-image: url("/assets/landingimage/mediallayers.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: -70px 0px;
}

.section2 {
  padding-top: 200px;
}

.second-session {
  max-width: 100%;
  margin: 0 auto;
}

.section4bottom {
  margin-bottom: 80px;
}

.musicicon {
  width: 180px;
  height: 180px;
}

.cardsStats {
  width: 100%;
  height: auto;
}

.Productstats {
  width: 100%;
  height: auto;
}

/* Section no 3 */
.line {
  background-color: var(--whitecolor);
  width: 10%;
  height: 3px;
}

/* Section 5 */
.section5h1 {
  font-weight: 700 !important;
}

.section5heading {
  margin-bottom: 50px;
}

.section5para1 {
  font-size: 23px;
}

.section5-2ndrow {
  background-color: var(--card-background-color);
  padding: 70px 40px 30px 40px;
  margin-top: 25px;
}

.section5span1 {
  font-size: 23px;
  font-family: var(--font-instrument);
}

.section5-quaters {
  margin-top: 10px;
}

.section5-Customwidth {
  width: 100%;
}

/* second Last Section */
.asked-question-wrapper {
  margin: 80px 0px;
}

.frequently-question-content h2 {
  font-size: 64px !important;
}

.frequently-question-content p {
  font-size: 23px !important;
  padding-bottom: 20px;
}
#dqrjcj9e5fho1734006055636 iframe {
  bottom: -10px !important;
}


/* Call To Action  */
.calltoaction-content {
  background: radial-gradient(100% 374.46% at 0% 0%,
      #00bdff 0%,
      #0077f5 50%,
      #8800ff 100%);
  border-radius: 50px;
}

.calltoaction-content>p {
  color: var(--whitecolor) !important;
  width: 94%;
  font-size: 1.5rem !important;
}

.calltoaction-content>h3 {
  font-size: 3.7rem !important;
  font-weight: 600 !important;
}

.section5lastpara {
  margin: 50px 0px;
}

/* Section 3 */

/* section 6 */

.section6h1 {
  margin: 80px 0px;
}

.MapSection {
  width: 100%;
  height: auto;
}

.MapSectiondiv {
  margin-top: 100px;
}

.section6para1 {
  padding: 0px 140px;
}

.section6lastRow {
  background-image: url("/public/landingimages/Rectangle.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
}

/* testimonial */
.youtube-video .Thumbnail {
  border-radius: 40px !important;
}



.testimonial>div {
  margin-bottom: 1rem;
}

.testimonial h6 {
  font-size: 1rem !important;
  margin-bottom: 0rem;
  padding: 0px 10px;
}

.testimonial h3 {
  font-size: 3rem !important;
  font-weight: 600 !important;
  padding-bottom: 50px;
}

.testimonial {
  margin: 100px 0px;
}

.customsec7h3 {
  margin-left: 10px;
  color: var(--primary) !important;
}

.figure img {
  margin-bottom: 20px;
}

.section2heading {
  margin-bottom: 40px;
}

.chat-bot{
  position: fixed;
  /* left: 0; */
  right: 20px ;
  padding: 15px ;
  border-radius: 50%;
  background: radial-gradient(65.69% 65.69% at 30.29% 24.45%, #00F2FF 0%, #006DE8 45.51%, #8800FF 89.59%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
z-index: 999;
border: none;
}
.chatbot-model{
  position: absolute;
  left: 40%;
  top: 30px;
  background-color: var(--card-background-color);
  min-width: 300px;
  text-align: center;
  height: 200px;
  z-index: 9999;
}
.card3 {
  width: 31%;
  padding: 25px;
  min-height: 270px;
}

.card3 .card3-body {
  min-height: 180px;
}

.card3 h5 {
  margin-bottom: 16px;
}

.custom-boxes {
  margin-bottom: 100px;
}

/* Popup styling  */
.modal-dialog {
  width: 80vw;
}

.modal-content {
  min-height: 89vh;
  background-color: #1e293e !important;
  box-shadow: 15px 17px 37px -4px lightgray !important;
}

.model-header {
  background-color: red !important;
}

.audio-button {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
  /* White button */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Add hover effect */
.audio-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

/* Centered Wave Icon */
.wave-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  /* Adjusted icon width */
  height: 60%;
  /* Adjusted icon height */
}

/* Individual waves */
.wave {
  width: 15px;
  /* Thickness of the wave lines */
  border-radius: 10px;
  /* Rounded ends */
  background: linear-gradient(180deg, #1A3761 0%, #B835C7 100%);
}

/* Wave heights */
.wave1 {
  height: 40%;
  /* First wave height */
}

.wave2 {
  height: 60%;
  /* Middle wave height */
}

.wave3 {
  height: 100%;
  /* Third wave height */
}

.wave4 {
  height: 60%;
  /* Fourth wave height */
}

.wave5 {
  height: 40%;
  /* Fifth wave height */
}

/* Animation */
@keyframes waveAnimation {
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(1.5);
  }

  100% {
    transform: scaleY(1);
  }
}

/* Apply animation when the button is active */
.audio-button.animating .wave1 {
  animation: waveAnimation 0.8s infinite ease-in-out;
}

.audio-button.animating .wave2 {
  animation: waveAnimation 0.8s infinite ease-in-out;
  animation-delay: 0.2s;
}

.audio-button.animating .wave3 {
  animation: waveAnimation 0.8s infinite ease-in-out;
  animation-delay: 0.4s;
}

.audio-button.animating .wave4 {
  animation: waveAnimation 0.8s infinite ease-in-out;
  animation-delay: 0.6s;
}

.audio-button.animating .wave5 {
  animation: waveAnimation 0.8s infinite ease-in-out;
  animation-delay: 0.8s;
}
/* Base container styling */
.youtube-video-container {
  position: relative;
  width: 100%; /* Default width for responsiveness */
  padding-top: 56.25%; /* Maintain 16:9 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
}

/* Thumbnail styling */
.youtube-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/landingimage/man-in-frame.png');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
}

.youtube-thumbnail.hidden {
  opacity: 0;
  pointer-events: none;
}

/* Play button */
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Responsive iframe */
.youtube-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.section5-quaters {
  border: unset !important;
  border-radius: unset !important;
}

.section4-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section4-img .play-btn {
  background-color: white;
  padding: 50px;
  border-radius: 50%;
  width: fit-content;
}

.section4-img .play-btn svg {
  color: var(--secondary) !important;
}

.accordion-item:first-child {
  background: none !important;
}
.swiper-pagination-bullet{
  background-color: white !important;
}
.swiper-pagination-bullet-active{
  background-color: var(--primary) !important;
}
.bookDemo-content h2 {
  font-size: 64px !important;
  padding-bottom: 10px;
}

.bookDemo-content p {
  font-size: 23px !important;
  padding-bottom: 20px;
}
.customScreen .figure2{
  border: 2px solid var(--primary);
  border-radius: 10px ;
}
.swiper-slide-next h6{
font-size: 10px !important;
}
@media screen and (min-width: 1400px) {
  .SecondSecBox-content {
    height: 130px !important;
  }
  .read-more-btn{
    display: none;
  }
  .main-wrapper {
    padding: 50px 50px;
  }

  .section4-img .play-btn {
    background-color: white;
    padding: 50px;
    border-radius: 50%;
    width: fit-content;
  }

  p {
    line-height: 36px !important;
    font-size: 1.6rem !important;
    font-size: 1.6rem !important;
  }

  .section5h3 {
    font-size: 2rem !important;
  }

  .section5para1 {
    width: 85%;
    margin: auto !important;
  }

  .section5para2 {
    font-size: 20px !important;
  }

  .section5lastpara p {
    font-size: 20px !important;
    line-height: 30px !important;
  }

  .section2 {
    padding-top: 50px !important;
  }

  .section3-main {
    margin-top: 20px !important;
  }
  .section4-img {
    margin: -20px 0px !important;
  }

  .section6h1 {
    margin: 80px 0px 50px 0px !important;
  }

  .section2h6 {
    margin: 90px 0px !important;
  }

  .section2h6 {
    margin: 50px 0px !important;
  }

  .testimonial h6 {
    font-size: 25px !important;
  }

  .testimonial h3 {
    font-size: 72px !important;
  }

  .customcard {
    border-radius: 10px;
    background-color: #0000001f !important;
  }

  .accordion-item h3 {
    font-size: 19px !important;
    margin: 0px !important;
  }

  .section6para1 {
    padding: 0px 80px !important;
    font-size: 30px !important;
    margin-bottom: 30px !important;
  }

  .section4h4 {
    font-size: 40px !important;
    font-weight: 400 !important;
    width: 70%;
    line-height: 50px !important;
    margin: auto;
  }

  .testimonial-heading {
    width: 50% !important;
  }

  .section3-main>div {
    width: 80% !important;
  }

  .section5para1 {
    font-size: 20px !important;
    line-height: 30px !important;
  }

  .fourth-section {
    max-width: 100%;
    margin: auto;
  }

  .section5h1 {
    font-size: 56px !important;
  }

  h5 {
    font-size: 1.8rem !important;
    line-height: 2.6rem !important;
    font-weight: 500 !important;
  }

  .custom-card-section {
    max-width: 100%;
    margin: auto;
  }

  .section3h5 {
    font-size: 28px !important;
  }

  .section3-main {
    text-align: center;
    margin: 0px 0px 10px 0px;
  }

  .card1h5 {
    font-weight: 600 !important;
  }

  .card1 p {
    font-size: 23px !important;
  }

  .section4h1 {
    font-size: 5rem !important;
    font-weight: 600 !important;
  }

  .btn-1 {
    font-weight: 500;
    font-size: 23px !important;
  }

  .section2h6 {
    font-size: 30px !important;
  }

  .bannerSpan {
    font-size: 18px;
  }

  .figure img {
    max-width: 60%;
  }

  .section3-span1 {
    font-size: 90px;
    line-height: 112px;
  }

  .main-banner {
    min-height: 94vh;
    width: 100%;
  }

  .banner-btn {
    margin-top: 40px;
  }

  .section3-wrapper {
    margin-top: 140px;
  }

  .CMargin {
    padding-right: 5px;
  }
.swiper-wrapper{
  padding-bottom: 100px;
}
.swiper-pagination-bullet{
  background-color: white !important;
}
.swiper-pagination-bullet-active{
  background-color: var(--primary) !important;
}
  .section6lastRow {
    margin-top: 30px;
    padding: 40px 80px;
    font-size: 26px;
  }

  .section7-wrapper {
    margin-top: 120px;
  }

  .section7h2 {
    font-size: 72px !important;
    margin-bottom: 90px;
  }

  .section7-btn {
    margin-top: 10px;
  }

  .footer-1strow {
    margin-bottom: 30px !important;
  }

  .section4-img {
    height: 55vh;
  }

  .section4-img button {
    height: 150px !important;
    width: 150px !important;
    text-align: center;
  }
  .youtube-videos:nth-child(1) iframe{
    min-height: 100% !important
  }
  .youtube-videos:nth-child(1) {
    height:60vh !important
  }
  .main-banner h1{
font-size: 71px !important;
  }
}

@media screen and (max-width: 1399px) {
  .calltoaction-content>p {
    color: var(--whitecolor) !important;
    font-size: calc(23px - 2px) !important;
    width: 97%;
  }
.main-wrapper {
  padding: 0px 70px !important;
}
  .wave {
    width: 13px;
  }

  .audio-button {
    width: 150px;
    height: 150px;
  }
  .youtube-videos{
    min-height: 360px !important
  }
  .line {
    width: 11%;
  }

  .section4-img .play-btn {
    padding: 30px 43px;
  }
  .section4-img {
    margin: 100px 0px !important;
  }
  .section4-img .play-btn svg {
    width: 70px;
  }
.section3h5 {
  font-size: 25px !important;
}
.card3 {
  width: 31%;
  padding: 25px;
  min-height: 200px;
}
.testimonial-heading {
  width: 50% !important;
}
.custom-boxes{
  margin-bottom: 50px !important;
}
  .frequently-question-content h2 {
    font-size: 56px !important;
    line-height: 60px !important;
  }

  .bookDemo-content p {
    line-height: 34px !important;
    font-size: 20px !important;
  }

  .frequently-question-content h3 {
    margin: 0px;
  }

  .frequently-question-content p {
    margin-bottom: 30px !important;
    font-size: 20px !important;
  }

  .calltoaction-content h5 {
    font-size: 34px !important;
  }

  .calltoaction-content>h3 {
    font-size: 54px !important;
    font-weight: 600 !important;
  }

  .car3-h5 {
    font-size: 28px !important;
    line-height: 37px !important;
    font-weight: 600;
  }

  /* .card3 {
    min-height: 300px;
} */

  .section4-wrapper {
    margin: 100px 0 !important;
  }

  .section4h1 {
    font-size: 70px !important;
  }

  .section5para1 {
    font-size: 22px !important;
    width: 86%;
    margin: 0 auto !important;
  }

  .custom-margin {
    margin-bottom: 20px !important;
  }

  .section4h4 {
    width: 70%;
    margin: auto;
    font-size: 36px !important;
    line-height: 46px !important;
  }

  .figure img {
    max-width: 66% !important;
  }

  .section2h5 {
    font-size: 26px !important;
  }

  .bannerSpandiv {
    margin: 30px 0px !important;
  }

  .bannerSpandiv {
    gap: 2rem !important;
  }

  .section2 {
    padding: 100px 0px !important;
  }

  .figure img {
    max-width: 70%;
  }

  .row1 {
    padding-top: 40px;
  }

  .colum1 {
    padding: 20px 0px !important;
  }

  .bannerpara {
    margin: 20px 0px !important;
  }

  .bannerSpan {
    font-size: 16px;
  }

  .figure1 {
    width: 200px !important;
    margin-bottom: 20px !important;
  }

  .section2h6 {
    margin: 40px 0px;
  }

  .section4-img {
    background-size: contain !important;
    height: 145px;
  }

  .section3-span1 {
    font-size: 100px;
    line-height: 100px;
  }

  .section3h5::before {
    left: 180px;
    width: 100px;
  }

  .section3h5::after {
    right: 180px;
    width: 100px;
  }

  .section5heading {
    margin-bottom: 50px;
  }

  .section5-2ndrow {
    padding: 30px !important;
    /* margin-top: 20px; */
  }
.section3-main > div{
  width: 100% !important;
}
  .section5span1 {
    font-size: 20px;
  }

  .section5-Customwidth {
    width: 560px;
  }

  .section5-CustomMargin {
    margin-right: 17px;
  }

  .section5h3 {
    margin-bottom: 30px;
  }

  .musicicon {
    width: 140px;
    height: 140px;
  }

  .section5lastpara {
    margin: 50px 0px;
  }

  /* section6 */
  .section6h1 {
    margin: 30px 0px;
  }

  .section6para1 {
    padding: 0px 190px;
  }

  .section6lastRow {
    margin-top: 30px;
    padding: 40px 80px;
    font-size: 22px;
  }
  .swiper-wrapper{
    padding-bottom: 140px !important;
  }
  .section7-wrapper {
    margin-top: 130px !important;
  }

  .section7h2 {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1200px) {
  .frequently-question-content h2 {
    font-size: calc(64px - 10px) !important;
    line-height: 55px !important;
  }

  .main-wrapper {
    padding: 0 19px !important;
  }

  .main-banner {
    padding: 0px 19px !important;
  }

  .wave {
    width: 11px;
  }

  .audio-button {
    width: 130px;
    height: 130px;
  }
  .section4-img {
    margin: 50px 0px !important;
  }
  .frequently-question-content p {
    font-size: calc(23px -5px) !important;
    padding-bottom: 20px;
  }

  .section4-img .play-btn {
    padding: 10px 33px;
  }

  .section4-img .play-btn svg {
    width: 50px;
  }


  .bookDemo-content h2 {
    font-size: calc(64px - 10px) !important;
    padding-bottom: 10px;
  }

  .section6para1 {
    line-height: 22px !important;
  }


  .section2h5 {
    font-size: 23px !important;
    line-height: 35px !important
  }

  .calltoaction-content>h3 {
    font-size: calc(4rem - 16px) !important;
    font-weight: 600 !important;
    padding-bottom: 5px;
  }

  .calltoaction-content>p {
    color: var(--whitecolor) !important;
    font-size: calc(23px - 3px) !important;
    width: 100%;
  }

  .figure img {
    max-width: 60%;
  }

  .bannerSpandiv {
    gap: 2rem !important;
  }

  .colum1 {
    padding: 30px 0px !important;
  }

  .bannerSpan {
    font-size: 14px;
  }

  .section2h6 {
    margin: 30px 0px;
  }

  .section3btn {
    margin: 50px 0px;
  }

  .section3-wrapper {
    margin-top: 15px;
  }

  .section3-span1 {
    font-size: 90px;
    line-height: 90px;
  }

  .section3h5::before {
    left: 110px;
    width: 100px;
  }

  .section3h5::after {
    right: 110px;
    width: 100px;
  }

  .section5lastpara {
    margin: 30px 0px !important;
  }

  .section4h4 {
    font-size: 24px !important;
    line-height: 30px !important;
  }

  .section3-span1 {
    font-size: 4.7rem !important;
    line-height: 70px !important;
  }

  .section4h1 {
    font-size: 60px !important;
  }

  .section5heading {
    margin-bottom: 35px;
  }

  .section5-2ndrow {
    padding: 50px 25px 30px 25px;
    margin-top: 15px;
  }

  .section5span1 {
    font-size: 18px;
  }

  .section5-Customwidth {
    width: 470px;
  }

  .main-banner {
    min-height: 69vh;
  }

  .section5-CustomMargin {
    margin-right: 17px;
  }

  .custom-boxes {
    margin-bottom: 50px !important;
  }

  .testimonial {
    margin: 50px 0px !important;
  }

  .testimonial>div {
    margin-bottom: 0px !important;
  }

  .calltoaction-content {
    margin: 80px 0px !important;
  }

  .section4-img {
    height: 140px;
    margin: 40px 0px;
  }

  .section4bottom {
    margin-bottom: 35px !important;
  }

  .section4-wrapper {
    margin: 80px 0px !important;
  }

  .section7h2 {
    margin-bottom: 50px !important;
  }

  .musicicon {
    width: 110px;
    height: 110px;
  }

  .section6h1 {
    margin: 10px 0px;
  }

  .customcard {
    min-height: 200px !important;
  }

  .section6lastRow {
    margin-top: 30px;
    padding: 40px 40px !important;
    font-size: 20px;
  }

  .section7-wrapper {
    margin-top: 90px !important;
  }
  .swiper-wrapper{
    padding-bottom: 70px  !important;
  }
}

@media screen and (max-width: 992px) {
  .frequently-question-content>h2 {
    font-size: calc(64px - 20px) !important;
    padding-bottom: 20px !important;
    /* line-height: 80px !important; */
  }

  .frequently-question-content>p {
    font-size: calc(23px - 10px) !important;
    padding-bottom: 35px !important;
  }
.calltoaction-content h5{
  font-size: 26px !important;
}
  .wave {
    width: 10px;
  }

  .section4-img .play-btn {
    padding: 1px 30px;
  }

  .section4-img .play-btn svg {
    width: 40px;
  }

  .audio-button {
    width: 110px;
    height: 110px;
  }

  .calltoaction-content>h3 {
    font-size: calc(4rem - 26px) !important;
    font-weight: 600 !important;
    padding-bottom: 5px;
  }

  .calltoaction-content>p {
    color: var(--whitecolor) !important;
    font-size: calc(23px - 3px) !important;
    width: 100%;
  }

  .second-sec-box-content {
    min-height: 15vh !important;
  }

  .bookDemo-content p {
    line-height: 30px !important;
  }

  .row1 {
    padding: 20px 0px !important;
  }

  .bannerSpan {
    font-size: 12px;
  }

  .banner-btn {
    margin-top: 40px !important;
  }
  .customScreen iframe{
    min-height: 70vh !important;
  }
  .section2h6 {
    margin: 30px 0px;
  }

  .section3-wrapper {
    margin-top: 80px;
  }

  .section3-span1 {
    font-size: 80px;
    line-height: 80px;
  }
  .main-banner .customScreen{
    display: flex !important;
    justify-content: center !important;
  }
  .youtube-videos {
    min-height: 524px !important;
  }
  /* 
  .swiper-slide {
    width: 100% !important;
  } */

  .section3h5::before {
    left: 60px;
    width: 100px;
  }

  .section3h5::after {
    right: 60px;
    width: 100px;
  }

  .section3btn {
    margin: 40px 0px;
  }

  .section4-wrapper {
    margin: 120px 0px !important;
  }

  .section4bottom {
    margin-bottom: 80px;
  }

  .section5heading {
    margin-bottom: 30px;
  }

  /*  */
  .section5heading {
    margin-bottom: 20px;
  }

  .section5-2ndrow {
    padding: 50px 25px 30px 25px;
    /* margin-top: 15px; */
  }

  .section5h3 {
    margin-bottom: 15px;
  }

  .section5span1 {
    font-size: 16px;
  }

  .section5-quaters {
    margin-top: 10px;
  }

  .section5-Customwidth {
    width: 100%;
  }

  .section5-CustomMargin {
    margin-right: 0px;
  }

  .musicicon {
    width: 90px;
    height: 90px;
  }
.modal-content{
  height: 20vh !important;
  overflow: hidden;
}
.modal-body {
  min-height: 20vh !important;
  overflow: hidden;
}
  .section2h5 {
    font-size: 20px !important;
  }

  .section6h1 {
    margin: 15px 0px;
  }

  .section6para1 {
    padding: 0px 90px;
  }
  .swiper-wrapper{
    padding-bottom: 70px !important ;
  }
  .section6lastRow {
    margin-top: 30px;
    padding: 30px 28px !important;
    font-size: 14px;
  }

  .section7-wrapper {
    margin-top: 120px !important;
  }
}

@media screen and (max-width: 768px) {
  .frequently-question-content>h2 {
    font-size: calc(64px - 25px) !important;
    padding-bottom: 20px !important;
  }

  .bookDemo-content>h2 {
    font-size: calc(64px - 25px) !important;
    padding-bottom: 5px;
    margin: 0px;
  }
  .section3-main > div{
    width: 100% !important;
  }
  .wave {
    width: 9px;
  }

  .audio-button {
    width: 100px;
    height: 100px;
  }

  .section4-img .play-btn {
    padding: 0px 26px;
  }

  .section4-img .play-btn svg {
    width: 40px;
  }

  .bookDemo-content>p {
    font-size: calc(23px- 6px) !important;
    padding-bottom: 20px;
  }
  .youtube-video-container {
    padding-top: 75%; /* Adjust aspect ratio for smaller screens */
  }

  .play-button {
    width: 60px;
    height: 60px;
  }
  .calltoaction-content {
    border-radius: 10px !important;
    margin: 50px 0px !important;
  }
  .section3h5 {
    font-size: 20px !important;
  }

  .flex-card {
    flex-direction: column;
    align-items: center;
  }
  .customScreen iframe{
    min-height: 70vh !important;
  }
  .section2heading>h5 {
    line-height: 25px !important;
    font-size: 18px !important;
  }
  .card3{
    min-height: 240px !important  ;
  }

  /* .swiper-slide {
    width: 100% !important;
  } */
  .bannerSpandiv {
    gap: 1rem !important;
  }

  .bannerSpandiv .bannerSpan {
    font-size: 14px !important;
  }

  .figure {
    display: flex;
    justify-content: center;
  }

  .figure img {
    max-width: 25% !important;
  }

  .bannerSpandiv {
    justify-content: center !important;
  }

  .section2h6 {
    font-size: 20px !important;
  }

  .section3-wrapper {
    margin: 15px 0px !important;
  }

  .section3-span1 {
    font-size: 3.5rem !important;
    line-height: 50px !important;
  }

  /* .section3btn .btn-1{
  font-size: 20px !important;
} */
  .section4-wrapper {
    margin: 40px 0px !important;
  }

  .section5para1 {
    font-size: 15px !important;
  }

  .section7-wrapper {
    margin: 30px 0px !important;
  }

  .section7h2 {
    margin-bottom: 20px !important;
  }

  .custom-boxes .customcard {
    width: 40% !important;
    min-height: 150px !important;
  }

  .customcard .card3-body h5 {
    font-size: 20px !important;
    line-height: 25px !important;
  }

  .customcard .card3-body p {
    font-size: 15px !important;
  }

  .calltoaction-content>h3 {
    font-size: 32px !important;
    font-weight: 600 !important;
  }

  .testimonial h3 {
    font-size: 2.3rem !important;
    padding: 0px !important;
  }

  .calltoaction-content>h5 {
    font-size: 23px !important;
  }

  .calltoaction-content>p {
    font-size: 18px !important;
  }

  .card3 {
    width: 48% !important;
    min-height: 200px;
  }
  .card3 h5{
    font-size: 20px !important;
  } 

  .colum1 {
    padding-top: 36px !important;
    padding-bottom: 0px !important;
  }

  h1 {
    line-height: 42px !important;
    text-align: center !important;
  }
  .frequently-question-content>p {
    font-size: calc(23px - 3px) !important;
    padding: 0px !important;
  }

  .bannerpara {
    text-align: center !important;
    font-size: 14px !important;
  }

  .bannerSpan {
    font-size: 12px;
    margin-bottom: 20px !important;
    display: flex;
    align-items: center;
    justify-content: space-around !important;
  }

  .customScreen {
    justify-content: center !important;
  }

  .banner-btn {
    text-align: center;
    padding: 0px !important;
    margin: 0 !important;
  }

  .figure1 {
    /* display: flex;
        justify-content: center; */
    width: 140px !important;
  }

  .section2h6 {
    margin: 8px 0px;
  }

  .section3-wrapper {
    margin-top: 60px;
  }

  .section3-span1 {
    font-size: 60px;
    line-height: 60px;
  }

  .section3h5::before {
    left: 40px;
    width: 80px;
  }

  .section3h5::after {
    right: 40px;
    width: 80px;
  }

  .section3btn {
    margin: 20px 0px;
  }

  .section4h1 {
    font-size: 45px !important;
  }

  .section4bottom {
    margin-bottom: 50px;
  }

  .section5h1 {
    font-size: 32px !important;
  }

  .section4-img {
    height: 80px !important;
    margin: 60px 0px;
  }

  .musicicon {
    width: 70px;
    height: 70px;
  }

  /*  */
  .section5heading {
    margin-bottom: 10px;
  }

  .section5-2ndrow {
    padding: 30px 5px 30px 15px;
    margin-top: 10px;
  }

  .section5h3 {
    margin-bottom: 15px !important;
  }

  .section5span1 {
    font-size: 15px;
  }

  .section5-quaters {
    margin-top: 10px;
  }
  .youtube-videos{
    min-height: 300px !important;
  }

  .section5-Customwidth {
    width: 100%;
  }

  .section5-CustomMargin {
    margin-right: 0px;
  }

  .section6para1 {
    padding: 0px 10px;
  }

  .section6lastRow {
    margin-top: 30px;
    padding: 20px 20px !important;
    font-size: 14px;
  }
  .MapSectiondiv img{
    max-width: 80% !important;
  }
  .section7h2 {
    margin-bottom: 30px;
  }
  .swiper-wrapper{
    padding-bottom: 80px !important;
  }
}

@media screen and (max-width: 576px) {
  .main-banner .colum1 .figure {
    text-align: center;
  }
  .section3-wrapper {
    margin: 30px 0 !important;
  }

  .wave {
    width: 8px;
  }
 
  .read-more-btn{
    background: transparent;
    border: none;
    font-size: 12px ;
  }

  .audio-button {
    width: 90px;
    height: 90px;
  }

  .main-banner {
    padding: 40px 00px !important;
  }

  .section2heading {
    margin-bottom: 10px !important;
  }
  .youtube-video-container {
    padding-top: 100%; /* Adjust aspect ratio for very small screens */
  }

  .play-button {
    width: 50px;
    height: 50px;
  }

  .section2heading h5 {
    font-size: 16px !important;
    line-height: 25px !important;
  }
  .modal-content{
    height: 20vh !important;
    overflow: hidden;
    left: 10%;
  }
  .section4-img .play-btn svg{
    width: 40px;
    padding: 0px 3px !important;

  }
  /* .section4-img .play-btn{
    padding: -10px 30px !important;
  }
  .section4-img .play-btn svg{
      width: 30px;
  } */
  .card3 .card3-body {
    min-height: 144px !important;
}
.customScreen iframe{
  min-height: 50vh !important;
}
  .circle svg {
    width: 17px;
  }
  .swiper-wrapper{
    padding-bottom: 40px !important;
  }
  h1 {
    font-size: 32px !important;
    line-height: 43px !important;
  }

  .section2 {
    padding: 30px 0 !important;
  }
  .bookDemo-content p {
    font-size: 15px !important;
    padding-bottom: 20px;
  }

  .frequently-question-content {
    padding: 0px 30px;
  }

  .section2h6 {
    font-size: 14px !important;
    margin-bottom: 10px !important;
  }
.section3-span1{
  font-size: 40px !important;
  line-height: 40px !important;
}
.section3-main{
  margin: 10px 0px !important;
}
.section3para{
  font-size: 0.90rem !important;
}
.swiper-slide-active {
  width: 100% !important;
  /* width: unset !important; */
}
.bookDemo-content h2{
  font-size: 20px !important;
}
  .section4h4 {
    font-size: 20px !important;
    margin: unset !important;
    text-align: center;
    width: 100%;
  }

  .section5h1 {
    line-height: 20px !important;
  }

  .section5para1 {
    width: 100%;
  }

  .section4-img {
    margin: 35px 0px !important;
  }

  .main-body {
    margin-top: 60px !important;
  }

  .MapSectiondiv {
    margin-top: 50px;
  }

  .frequently-question-content>h2 {
    font-size: calc(64px - 30px) !important;
    line-height: 40px !important;
    padding-bottom: 10px !important;
  }

  .frequently-question-content p {
    font-size: calc(23px - 6px) !important;
    padding-bottom: 30px;
  }

  .bookDemo-content>h2 {
    font-size: calc(64px - 30px) !important;
    padding-bottom: 0px;
    margin: 0px !important;
  }

  .bookDemo-content>p {
    font-size: calc(23px - 5px) !important;
    padding-bottom: 10px;
    line-height: 25px !important;
  }

  .bookDemo-content {
    padding: 0px 20px;
    margin: 20px 0px !important;
  }

  .calltoaction-wrapper {
    padding: 0px 20px;
    margin: 40px 0px !important;
  }

  .calltoaction-content>h3 {
    font-size: 29px !important;
    font-weight: 600 !important;
  }

  .calltoaction-content>p {
    font-size: 18px !important;
    line-height: 25px !important;
  }

  .calltoaction-content>h5 {
    font-size: 22px !important;
    line-height: 25px !important;
  }

  .colum1 {
    padding: 0px 0px !important;
  }

  .bannerpara {
    text-align: center;
    padding: 0px 0px !important;
    margin: 10px 0px !important;
    font-size: 16px !important;
    line-height: 26px !important;
  }

  .banner-btn {
    text-align: center;
    margin-top: -20px !important;
    padding: 0px !important;
  }

  .bannerSpandiv .bannerSpan {
    font-size: 11px !important;
  }

  .bannerSpan svg {
    margin-right: 10px;
  }
      .section3h5{
        font-size: 0.8rem !important;
      }
  .bannerSpandiv {
    gap: 5px !important;
  }

  .bannerSpandiv {
    gap: 0.5rem !important;
  }

  .bannerSpan {
    font-size: 11px;
  }

  .custom-card-section p {
    font-size: 13px !important;
    line-height: 20px !important;
  }

  .figure img {
    max-width: 30% !important;
  }

  .figure1 {
    width: 100px !important;
  }

  .customScreen {
    justify-content: center !important;
  }


  .section2h6 {
    margin: 4px 0px;
  }

  .section2 {
    padding: 50px 0px !important;
  }

  .section3-wrapper {
    /* margin: 10px 0px !important; */
    padding: 0px 20px !important;
  }
  .section3-span1 {
    font-size: 35px;
    line-height: 45px;
  }
.youtube-videos{
  min-height: 236px !important;
}
  .section3-main {
    margin: 20px 0px 20px 0px;
  }

  .section3h5::before {
    left: 40px;
    width: 45px;
  }

  .section3h5::after {
    right: 40px;
    width: 45px;
  }

  .section3btn {
    margin: 20px 0px;
  }

  .section4bottom {
    margin-bottom: 20px;
  }

  .section5h1 {
    font-size: 24px !important;
  }

  /*  */
  .section5-wrapper {
    padding: 0px 20px !important;
  }

  .section5heading {
    margin-bottom: 10px;
  }

  .section5-2ndrow {
    padding: 30px 5px 30px 10px;
    margin-top: 10px;
  }

  .section5h3 {
    margin-bottom: 10px !important;
  }

  .section5span1 {
    font-size: 14px;
  }

  .section5-quaters {
    margin-top: 8px;
  }

  .section5-Customwidth {
    width: 100%;
  }

  .section5-CustomMargin {
    margin-right: 0px;
  }

  .section4-img {
    height: 81px !important;
  }

  .musicicon {
    width: 60px;
    height: 60px;
  }

  .section2center {
    padding: 0px 20px;
  }

  .section5para2 {
    margin-bottom: 5px !important;
  }

  .section6-wrapper {
    padding: 0px 20px;
  }

  .section7-wrapper {
    margin-top: 30px !important;
    padding: 0px 20px;
  }

  .custom-boxes .customcard {
    width: 70% !important;
    /* height:200px  !important; */
  }

  .section7h2 {
    font-size: 27px !important;
    line-height: 35px !important;
  }

  .custom-boxes {
    margin-bottom: 30px !important;
  }

  .testimonial {
    margin: 0px !important;
  }

  .testimonial h6 {
    font-size: 15px !important;
  }

  .calltoaction-content {
    margin: 0px !important;
  }

  .calltoaction-content h3 {
    font-size: 1.8rem !important;
  }

  .calltoaction-content h5 {
    font-size: 1rem !important;
  }

  .calltoaction-content p {
    font-size: 0.85rem !important;
  }

  .asked-question-wrapper {
    margin: 40px 0px !important;
  }

  .frequently-question-content p {
    margin: 0px !important;
    padding: 15px 0px !important;
  }

  .frequently-question-content h2 {
    margin: 0px !important;
    padding: 0px 0px !important;
  }

  .accordion-item h3 {
    font-size: 1rem !important;
    margin: 0px !important;
    line-height: 23px !important;
  }

  .accordion-body h5 {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  .accordion-body ul li {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  .accordion-body h6 {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  .bookDemo-content p {
    font-size: 1rem !important;
  }

  .footer-copyright-body div {
    margin-bottom: 5px !important;
  }

  .section2bottom button {
    margin-top: 20px !important;
  }
  .MapSectiondiv img{
    max-width: 100% !important;
  }
  .card3 {
    max-width: 48% !important;
    min-height: 0px !important; 
  }
  .card3 {
    width: 47.3% !important;
    min-height: 170px !important;
    padding: 15px !important;
  }
  .main-body {
    height: fit-content !important;
    padding: 40px 0px 20px 20px !important;
}
.section5-2ndrow{
  padding: 15px !important;
}
  .card3 h5 {
    font-size: 16px !important;
    line-height: 20px !important;
  }
  .section5h1{
    line-height: 28px !important;
  }
}
      `}</style>
      </Layout>
    </>
  );
}
