import { useRouter } from "next/router";
import React from "react";
import TeamBox from "../teamapi.json";
import { useState, useEffect } from "react";
import Image1 from "@/images/team/Barry-Krevoy-2.webp";
import Image2 from "@/images/team/Barry-Krevoy-IA-Speaker-.webp";
import Navbar from "@/Componenets/home/Header";
import Model from "@/Componenets/model/Model";
import Banner from "@/Componenets/about/Banner";
import Image from "next/image";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import CalltoAction from "@/Componenets/home/CalltoAction";
import Headingh3 from "@/Componenets/typography/h3/Headingh3";
import Footer from "@/Componenets/home/Footer";
const Teampost = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (slug) {
      const Teamid = TeamBox.find((items) => items.id == slug);
      setData(Teamid);
    }
  }, [slug]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const Card = [
    {
      id: 1,
      title: "Sales Leadership Expert",
      description: "With 37 years in sales, I have excelled as a top-tier performer and cultivated excellence as a recruiter, trainer, and manager of a 1,000-strong workforce."
    },
    {
      id: 2,
      title: "Online Auction Innovator",
      description: "I foresaw the rise of online auctions, assessing their benefits over traditional live events, and launched the ground-breaking 'Collectible Trader.'"
    },
    {
      id: 3,
      title: "Digital Efficiency Advocate",
      description: "Identified the internets role in boosting business efficiency and generating cost savings early on, setting a benchmark for digital adoption in business."
    },
    {
      id: 4,
      title: "Digital Marketplace Founder",
      description: "Established 'Collectible Trader' in 1995, leading the online auction movement and redefining collectible trading."
    },
    {
      id: 5,
      title: "Internet Business Pioneer",
      description: "In 1995, I recognized the internets radical potential to transform business, envisioning its far-reaching impact on global commerce."
    },
    {
      id: 6,
      title: "Art Market Visionary",
      description: "As a gallery director, I pioneered the concept of direct art sales, capitalizing on untapped market potential."
    }
  ];
  
  return (
    <>
      {showModal && <Model close={handleCloseModal} />}
      <Navbar
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      {data && (
        <Banner  title={data.name} paragraph={data.description} layout={true} />
      )}

      <div class="service-section section-b-space mt-2 expertise" style={{paddingTop: "250px"}}>
        <div class="container">
          <div class="row g-5 service_row">
            <div class="col-lg-6">
              <div class="barry_images d-flex gap-3">
                <Image src={Image1} class="profile_img" alt="" priority />
                <Image src={Image2} alt="" priority />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="service-info">
                <div>
                  <Para
                    paragraph="AI Expert Insights: Barry Krevoy offers a deep dive into the latest trends in artificial
                intelligence. With his extensive experience and knowledge, Barry provides valuable
                perspectives on how businesses can leverage AI to enhance efficiency and drive
                innovation. Tune in to his insights for cutting-edge strategies that keep you ahead in
                the ever-evolving tech landscape."
                    paragraph2="  Since 1989, Barry Krevoy has been an early tech adopter, foreseeing the digital
                revolution. He transformed art sales, pioneering online auctions with “Collectible
                Trader” in 1995. With 37 years in sales, he excelled as a leader, shaping over a
                thousand professionals into top performers, embracing change to drive business success.
                Delve into AI Expert Insights with Barry Krevoy."
                    breakpoint={true}
                  />
                </div>
              </div>
            </div>
          <div class="row">

<div class="col-lg-6">
    <div class="service_boxes_div service" style={{width: "100%", position: "relative", left: "none"}}>

        <div class="col-sm-6">
            <div class="service-box">
                <div class="service-content">
                <Headingh3 style={{color: "#00BDFF"}} title="To 500K Monthly Visitors" />
                <Para paragraph={`"Collectible Trader" - online auction pioneer since '95, reshaping collectibles
                        market.` }/>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="service-box">
                <div class="service-content">
                <Headingh3 style={{color: "#00BDFF"}} title="30% Cost Reduction" />
                <Para paragraph="Achieved through early adoption of internet technologies in business, enhancing
                        productivity and efficiency for our clients" />
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="service-box">
                <div class="service-content">
                    <Headingh3 style={{color: "#00BDFF"}} title="Top 5% Performance" />
                    <Para paragraph="37 years of sales leadership, innovative strategies & team development." />
                   
                </div>
            </div>
        </div>


    </div>
</div>
</div>
          </div>
        </div>
      </div>
   
      <CalltoAction   showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal} />
      <div class="section-b-space barry_expertise_section">
        <div class="container">
            <div class="barry_expertise_container">
              {Card.map((items)=>{
                return(

                <article class="barry_exp_box" key={items.id}>
                    <div class="exp_content">
                        <h3>{items.title}</h3>
                        <p>{items.description}</p>
                    </div>
                </article>
                )
              })}
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Teampost;
