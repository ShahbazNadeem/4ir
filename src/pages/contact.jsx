'use client'
import Navbar from "@/Componenets/home/Header";
import CallToAction from "@/Componenets/home/CalltoAction";
import React from "react";
import Footer from "@/Componenets/home/Footer";
import { useState } from "react";
import Heading1 from "@/Componenets/typography/h1/Heading1";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Headingh4 from "@/Componenets/typography/h4/H4";
import H2 from "@/Componenets/typography/h2/Heading2";
import Banner from "@/Componenets/about/Banner";
const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
    <Navbar handleOpenModal={handleOpenModal} showModal={showModal}handleCloseModal={handleCloseModal} />
    <Banner layout={true} title="BOOK A MEETING WITH 4IR"  paragraph="  Book a time to explore how we can advance your business with
                  AI solutions." contactClass="contact"   marginLeft="100px"
                  widthclass="50%" />
      <section class="section-b-space">
        <div class="container">
            <div class="service-info">
                <div>
                    <div class="title">
                      <Headingh4 style={{color: "#00BDFF", marginBottom: "1rem"}} heading="Connect with Us to Accelerate Innovation" />
                        <H2 className="text-white" spanstyle={{color: "#ffce00"}} title="Let’s Connect" secondtitle=" and Drive Innovation Together" />
                    </div>
                    <Para className="service_paragraph" style={{marginBottom: "2rem"}} paragraph="We’re excited to help you
                        explore the possibilities of AI and digital transformation for your business. To ensure you get
                        the most out of our
                        conversation, we invite you to schedule a meeting at a time that suits you." />
                    <Para className="service_paragraph" style={{marginBottom: "2rem"}} paragraph="Simply use the Calendly
                        scheduler below to book a one-on-one consultation with our team. Together, we’ll discuss your
                        unique needs,
                        challenges, and how we can support your journey through the Fourth Industrial Revolution." />
                  
                </div>
            </div>
            <iframe class="calendly-inline-widget"
                src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                style={{width:"100%",height:"700px", backgroundColor: "transparent"}}></iframe>
        </div>
    </section>
         <CallToAction handleOpenModal={handleOpenModal} showModal={showModal}handleCloseModal={handleCloseModal} />
    <Footer />
    </>
  );
};

export default Contact;
