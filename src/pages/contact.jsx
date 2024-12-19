"use client";
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
import Head from "next/head";
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
    <Head>
        <title>Fourth Industrial Revolution Inc.</title>
      </Head>
      <Navbar
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Banner
        layout={true}
        title="BOOK A MEETING WITH 4IR"
        paragraph="  Book a time to explore how we can advance your business with
                  AI solutions."
        contactClass="contact contactus_pagecss1"
        marginLeft="-30px"
        widthclass="auto"
      />
      <section class="section-b-space contactus_pagecss2">
        <div class="container">
          <div class="service-info">
            <div>
              <div class="title">
                <Headingh4
                  style={{ color: "#00BDFF", marginBottom: "1rem" }}
                  heading="Connect with Us to Accelerate Innovation"
                />
                <H2
                  className="text-white"
                  spanstyle={{ color: "#ffce00" }}
                  title="Let’s Connect"
                  secondtitle=" and Drive Innovation Together"
                />
              </div>
              <Para
                className="service_paragraph"
                style={{ marginBottom: "2rem", fontSize: "17.2px" }}
                paragraph="We’re excited to help you
                        explore the possibilities of AI and digital transformation for your business. To ensure you get
                        the most out of our
                        conversation, we invite you to schedule a meeting at a time that suits you."
              />
              <Para
                className="service_paragraph"
                style={{ marginBottom: "2rem", fontSize: "17.2px" }}
                paragraph="Simply use the Calendly
                        scheduler below to book a one-on-one consultation with our team. Together, we’ll discuss your
                        unique needs,
                        challenges, and how we can support your journey through the Fourth Industrial Revolution."
              />
            </div>
          </div>
          <iframe
            className="calendly-inline-widget"
            src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
            style={{minWidth: "100%", height: "700px", }}
             loading="lazy"
              ></iframe>
        </div>
      </section>
      <CallToAction
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
    </>
  );
};

export default Contact;
