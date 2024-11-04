import AboutBoxes from "@/Componenets/about/AboutBoxes";
import Banner from "@/Componenets/about/Banner";
import Detail from "@/Componenets/about/Detail";
import Footer from "@/Componenets/home/Footer";
import Navbar from "@/Componenets/home/Navbar";
import Testimonial from "@/Componenets/home/Testimonial";

export default function Services() {
  return (
    <>
      <Navbar />
      <Banner
        layout={true}
        title="OUR SERVICES"
        paragraph="AI Products and Solutions by Fourth Industrial Revolution Inc."
      />
      <Detail
        heading="AI Solutions Across Diverse Industries"
        title1="Industries"
        title2=" We Serve"
        paragraph="At Fourth Industrial Revolution Inc., we serve a diverse range of industries, helping businesses from various sectors embrace AI and digital transformation. From finance to healthcare, retail to manufacturing, our solutions are tailored to meet the unique challenges of your industry."
      white="#fff"
      spancontent1="We build long-term partnerships based on trust, transparency, and a shared vision for success. Our holistic approach ensures we not only provide the right technology but also foster a culture of innovation and continuous improvement."
      spancontent2="No matter where you are in your digital transformation journey, we're here to guide you every step of the way. Contact us today to learn how we can help your business thrive in the Fourth Industrial Revolution."
      Box={true}
      />
      <Testimonial />
      <Footer />
    </>
  );
}
