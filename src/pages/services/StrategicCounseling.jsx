"use client";
import Banner from "@/Componenets/about/Banner";
import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Header";
import Testimonial from "@/Componenets/clientreview/Testimonial";
import Headingh2 from "@/Componenets/typography/h2/Heading2";
import Headingh4 from "@/Componenets/typography/h4/H4";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Strategicimg from "@/images/services/strategic counselling/strategicconsulting.png";
import BusinessModel from "@/images/services/strategic counselling/businessmodelinnovation.png";
import DigitalWork from "@/images/services/strategic counselling/digitalworkforcestrategy.png";
import DataGovernance from "@/images/services/strategic counselling/datagovernancemanagement.png";
import DigitalSupply from "@/images/services/strategic counselling/digitalsupplychainoptimization.png";
import CustomerExperience from "@/images/services/strategic counselling/customerexperiencetransformation.png";
import Partnerships from "@/images/services/strategic counselling/digitalecosystempartnership.png";
import DigitalGovernance from "@/images/services/strategic counselling/digitalgovernanceriskmanagement.png";
import ChangeManagement from "@/images/services/strategic counselling/changemanagementadoption.png";
import DigitalInnovation from "@/images/services/strategic counselling/digitalinnovationculture.png";
import OfferBox from "@/Componenets/offerbox/OfferBox";
import jimImg from "@/images/landing/ai_talk_assist/JimThiel .png";
import tobyImg from "@/images/landing/ai_talk_assist/TobyWoods.png";
import carolImg from "@/images/landing/ai_talk_assist/CarolHuston.png";
import { useState } from "react";
import CalltoAction from "@/Componenets/home/CalltoAction";
export default function Strategic() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const testimonials = [
    {
      id: 1,
      content:
     " While many people are intimidated by AI, Barry has a way of making it practical and approachable. He's taen the mystery -- and the fear--out of it, showing us how AI can be a powerful tool in our arsenal. Thanks to Barry, we now see AI as a game-changer that frees up our time so we can focus on what truly matters--our clients." ,
      name: "Carol Huston",
      position: "True Story Realty",
      class:true,
      image: carolImg,
      aosDelay: 500,
    },
    {
      id: 2,
      content: "Best of the best that about sums up my experience.",
      name: "Jim Thiel",
      position: "Mortgage Advisor",
      class:true,
      image: jimImg,
      aosDelay: 0,
    },
    {
      id: 3,
      content:
        "There commitment to helping clients incorporate AI and stay updated with the latest technologies is evident. Working with them has been both fun and rewarding, saving me time and money. I highly recommend Fourth Industrial Revolution to any buisness looking to enhance its digital presence and operational efficiency. ",
      name: "Toby Woods",
      position: "NorthStar Systems, LLC",
      image: tobyImg,
      class:true,
      aosDelay: 400,
    },
    {
      id: 4,
      content:
     " While many people are intimidated by AI, Barry has a way of making it practical and approachable. He's taen the mystery -- and the fear--out of it, showing us how AI can be a powerful tool in our arsenal. Thanks to Barry, we now see AI as a game-changer that frees up our time so we can focus on what truly matters--our clients." ,
      name: "Carol Huston",
      position: "True Story Realty",
      class:true,
      image: carolImg,
      aosDelay: 500,
    },
   
  
  ];
  const OfferBoxarray = [
    {
      id: 1,
      image: Strategicimg,
      title: "Strategic Consulting",
      row: "row",
      aos: "slide-right",
      para: "Assessment of current technology landscape and identification of gaps Prioritization of technology initiatives based on business objectives and ROI Development of a phased implementation plan with milestones and deadlines Guidance on budget allocation and resource management for technology adoption",
    },
    {
      id: 2,
      image: BusinessModel,
      title: "Business Model Innovation",
      columnreverse: "offer_box1",
      row: "row-reverse",
      aos: "slide-left",
      para: "Evaluation of existing business model and identification of areas for improvement Exploration of new revenue streams and value propositions enabled by technology Assistance with the design and validation of innovative business models Guidance on the implementation and scaling of new business models",
    },
    {
      id: 3,
      image: DigitalWork,
      title: "Digital Workforce Strategy",
      row: "row",
      aos: "slide-right",
      para: " Assessment of current workforce skills and identification of future skill requirements Development of a digital workforce transformation pla Guidance on talent acquisition, upskilling, and reskilling strategie Assistance with the implementation of digital workforce management practices",
    },
    {
      id: 4,
      image: DataGovernance,
      title: "Data Governance And Management",
      columnreverse: "offer_box1",
      row: "row-reverse",
      aos: "slide-left",
      para: "Assessment of current technology landscape and identification of gaps Prioritization of technology initiatives based on business objectives and ROI Development of a phased implementation plan with milestones and deadlines Guidance on budget allocation and resource management for technology adoption",
    },
    {
      id: 5,
      image: DigitalSupply,
      title: "Digital Supply Chain Optimization",
      row: "row",
      aos: "slide-right",
      para: "Evaluation of existing business model and identification of areas for improvement Exploration of new revenue streams and value propositions enabled by technology Assistance with the design and validation of innovative business models Guidance on the implementation and scaling of new business models",
    },
    {
      id: 6,
      image: CustomerExperience,
      title: "Customer Experience Transformation",
      columnreverse: "offer_box1",
      row: "row-reverse",
      aos: "slide-left",
      para: "Assessment of current technology landscape and identification of gaps Prioritization of technology initiatives based on business objectives and ROI Development of a phased implementation plan with milestones and deadlines Guidance on budget allocation and resource management for technology adoption",
    },
    {
      id: 7,
      image: Partnerships,
      title: "Digital Ecosystem Partnerships",
      row: "row",
      aos: "slide-right",
      para: "Evaluation of existing business model and identification of areas for improvement Exploration of new revenue streams and value propositions enabled by technology Assistance with the design and validation of innovative business models Guidance on the implementation and scaling of new business models",
    },
    {
      id: 8,
      image: DigitalGovernance,
      title: "Digital Governance And Risk Management",
      columnreverse: "offer_box1",
      row: "row-reverse",
      aos: "slide-left",
      para: "Assessment of current technology landscape and identification of gaps Prioritization of technology initiatives based on business objectives and ROI Development of a phased implementation plan with milestones and deadlines Guidance on budget allocation and resource management for technology adoption",
    },
    {
      id: 9,
      image: ChangeManagement,
      title: "Change Management And Adoption",
      row: "row",
      aos: "slide-right",
      para: "Assessment of current technology landscape and identification of gaps Prioritization of technology initiatives based on business objectives and ROI Development of a phased implementation plan with milestones and deadlines Guidance on budget allocation and resource management for technology adoption",
    },
    {
      id: 10,
      image: DigitalInnovation,
      title: "Digital Innovation Culture",
      columnreverse: "offer_box1",
      row: "row-reverse",
      aos: "slide-left",
      para: "Assessment of current technology landscape and identification of gaps Prioritization of technology initiatives based on business objectives and ROI Development of a phased implementation plan with milestones and deadlines Guidance on budget allocation and resource management for technology adoption",
    },
  ];
  return (
    <>
      <Navbar />
      <Banner
        layout={true}
        title="Strategic Counseling Services"
        paragraph="Business Automation with Technology and AI on it"
    size= "40px"
         widthclass="40%"
         fadeLeft="fade-left"
         fadeRight="fade-right"
         margin="16px"
      />
      <div className="service-section servicebackground section-b-space mt-2"style={{paddingTop: "178px"}}>
        <div className="container">
          <div className="row g-5">
            <div className="service-info">
              <div>
                <div data-aos="fade-right"

data-aos-delay="50"
data-aos-duration="1000" className="title">
                  <Headingh4
                    style={{ color: "rgb(0 189 255)" }}
                    heading="AI-Powered Strategic Solutions"
                  />
                  <Headingh2
                    className="text-white"
                    spanstyle={{ color: "#ffce00" }}
                    title1="Our"
                    title=" AI-Driven"
                    secondtitle="Strategic Consulting Services"
                  />
                </div>
                <Para Left="fade-left"

Delay="50"
Duration="1000" paragraph="At the forefront of digital transformation, we offer comprehensive AI-driven consulting services designed to help businesses innovate, optimize, and grow. Our approach blends cutting-edge AI technologies with strategic insights to streamline operations, enhance customer experiences, and future-proof your business. From business model innovation to workforce transformation and data governance, we provide tailored solutions that deliver measurable results while ensuring smooth implementation and adoption across your organization. Discover how our AI expertise can take your business to the next level." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OfferBox data={OfferBoxarray} />
      <Testimonial testimonials={testimonials} />
      <CalltoAction
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
    </>
  );
}
