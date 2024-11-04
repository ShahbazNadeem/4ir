import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Navbar";
import Team from "@/Componenets/home/Team";
import Testimonial from "@/Componenets/home/Testimonial";
import React from "react";
import Feature from "@/images/feature.gif";
import Featurebg from "@/images/feature-bg.png";
import Person1 from "@/images/team/BarryKrevoy.png";
import Person2 from "@/images/team/ShaneKrevoy.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "@/Componenets/about/Banner";
import Detail from "@/Componenets/about/Detail";

const About = () => {
  return (
    <>
      <Navbar />
      <Banner
        heading="FOURTH INDUSTRIAL REVOLUTION INC"
        title="ABOUT US"
        paragraph="AI Solutions Experts: Our Story and Mission"
        layout={false}
      />
      <Detail
        heading="Driving Innovation in the 4IR Era"
        title1="Empowering Your Business"
        title2="In The Fourth Industrial Revolution"
        paragraph="At Fourth Industrial Revolution Inc., we are dedicated to empowering small to midsize businesses and solopreneurs to thrive in the rapidly evolving digital landscape. Our mission is simple yet profound: to equip businesses with the knowledge and tools they need to embrace transformative technologies, remain competitive, reduce costs, and drive profits. By guiding businesses through the complexities of the Fourth Industrial Revolution, we help them unlock their full potential and navigate the future with confidence."
        
      layout={true}
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
        layout={true}
      />

      <Testimonial />
      <Footer />
    </>
  );
};

export default About;
