import Banner from "@/Componenets/about/Banner";
import CalltoAction from "@/Componenets/home/CalltoAction";
import Navbar from "@/Componenets/home/Header";
import { useState } from "react";
import AiFeatureBox from "@/Componenets/ai-feature-box/AiFeatureBox";
import Footer from "@/Componenets/home/Footer";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
export default function TrainingEducation(){
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    const AiFeatureBoxapi=[
      {
        id:1,
        title: "Tailored for All Skill Levels",
        para:"Whether beginner or advanced, we offer courses that fit your team’s needs.",
       layout:false,
      },
      {
        id:2,
        title: "Flexible, Self-Paced Learning",
        para:"Learn at your own speed, anytime and anywhere, with easy-to-follow content designed for real-world application.",
     
       layout:true,
      },
      {
        id:3,
        title: "Expert Mentorship and Support",
        para:"Gain access to a community of AI experts and dedicated mentors to guide you through every step of the way.",
     
       layout:false,
      },
      {
        id:4,
        title: "Real-World Projects",
        para:"Work on industry-relevant projects that allow you to apply AI concepts directly to your work.",
       layout:true,
      },
    ]
    return(
        <>
        <Navbar showModal={showModal} handleOpenModal={handleOpenModal}handleCloseModal={handleCloseModal}  />
        <Banner
        layout={true}
        title="AI TRAINING & EMPOWERMENT"
        paragraph="Unlock the Full Potential of Your Team with Tailored AI
Education and Skills Development"
      />
        <section class="service-section section-b-space mt-2 training">
        <div class="container">
            <div class="row g-5 expertise_div">
                <div class="col-lg-6">
                    <div class="service-info">
                        <div>
                            <h4 style={{color: "#00BDFF", marginBottom: "2rem"}}>AI Mastery for Business Growth</h4>
                            <div class="title">
                                <h2>Accelerate Your AI Expertise and <span style={{color: "#ffce00"}}>Drive Impact</span>
                                </h2>
                            </div>
                            <Para paragraph="In today’s fast-evolving world, staying ahead means continuously learning
                                and adapting. Our AI training and education programs are designed to
                                equip your team with the skills needed to harness the power of AI
                                products and apps to optimize their work and drive your business
                                forward. Whether you’re looking to upskill your employees or foster a
                                culture of innovation, our comprehensive courses have you covered." />
                        </div>
                    </div>
                </div>


                <div class="col-lg-6">
                    <img style={{width: "100%", height: "100%", border:"none", borderRadius: "1rem"}}
                        src="/assets/images/services/trainingandeducation.png" alt="" />
                </div>

            </div>
        </div>
    </section>
    <section className="ai-features-section section-b-space service-section" id="how-it-work">
    <div className="container"> 

      <div className="ai-features-container">
                <div className="ai-vertical-line"></div>
          <AiFeatureBox AiFeatureBoxapi={AiFeatureBoxapi} />

            </div>
    </div>
    </section>
        <CalltoAction showModal={showModal} handleOpenModal={handleOpenModal}handleCloseModal={handleCloseModal} />
        <Footer />
        </>
    )

}