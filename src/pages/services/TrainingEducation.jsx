"use client";
import Banner from "@/Componenets/about/Banner";
import CalltoAction from "@/Componenets/home/CalltoAction";
import Navbar from "@/Componenets/home/Header";
import { useState } from "react";
import AiFeatureBox from "@/Componenets/ai-feature-box/AiFeatureBox";
import Footer from "@/Componenets/home/Footer";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import Headingh4 from "@/Componenets/typography/h4/H4";
import H2 from "@/Componenets/typography/h2/Heading2";
import Headingh3 from "@/Componenets/typography/h3/Headingh3";
import FAQ from "@/Componenets/FAQ/Faq";
import Image from "next/image";
import Training from "@/images/services/trainingandeducation.png"
export default function TrainingEducation() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const AiFeatureBoxapi = [
    {
      id: 1,
      title: "Tailored for All Skill Levels",
      para: "Whether beginner or advanced, we offer courses that fit your team’s needs.",
      layout: false,
    },
    {
      id: 2,
      title: "Flexible, Self-Paced Learning",
      para: "Learn at your own speed, anytime and anywhere, with easy-to-follow content designed for real-world application.",

      layout: true,
    },
    {
      id: 3,
      title: "Expert Mentorship and Support",
      para: "Gain access to a community of AI experts and dedicated mentors to guide you through every step of the way.",

      layout: false,
    },
    {
      id: 4,
      title: "Real-World Projects",
      para: "Work on industry-relevant projects that allow you to apply AI concepts directly to your work.",
      layout: true,
    },
  ];
  const BarryBox = [
    {
      id: 1,
      heading: "01",
      title: "Identify Your Passion",
      para: "Uncover what drives you at your core. Align your learning objectives with your deepest values and aspirations, setting the stage for purpose-driven education.",
    },
    {
      id: 2,
      heading: "02",
      title: "Dream Big, Start Bold",
      para: "Learn how to scaffold your educational goals within the context of your MTP, ensuring every step you take is a stride towards a larger vision.",
      shadow: "#00BDFF 0px 0px 5px"
    },
    {
      id: 3,
      heading: "03",
      title: "Become an Agent of Change",
      para: "Equip yourself with the knowledge to not only succeed in your career but to also drive meaningful change in your industry or community.",
    },
  ];
  const Faq = [
    {
      id: 1,
      toggleId: 0,
      title:" Do I need a specific background to start learning about AI? ",
      showtitle:
        "Our AI courses are designed with a diverse audience in mind. Whether you’re new to tech or looking to enhance your expertise, our structured curriculum will guide you from the basics to advanced concepts without any prior specialized knowledge required.",
        targetId:"panelsStayOpen-headingOne",
        ariaControls:"panelsStayOpen-collapseOne",
    },
    {
      id: 2,
      toggleId: 1,
      title: " What is the typical duration of an AI course?",
      showtitle:
        "  The length of our AI courses varies, but typically you can expect to complete each course within 4 to 6 weeks if you dedicate a few hours per week. Our courses are self-paced, so you have the flexibility to learn on a schedule that fits your life.",
  targetId:"panelsStayOpen-headingTwo",
  ariaControls:"panelsStayOpen-collapseTwo",
    },
    {
      id: 3,
      toggleId: 2,
      title: "What kind of practical skills will I gain?",
      showtitle:
        "  Upon completion, you’ll be proficient in AI fundamentals, data analysis, machine learning algorithms, and you’ll have hands-on experience with real-world projects. This will prepare you for applying AI solutions to challenges in various industries.",
        targetId:"panelsStayOpen-headingThree",
        ariaControls:"panelsStayOpen-collapseThree",
    },
    {
      id: 4,
      toggleId: 3,
      title: " Will I earn a certification after completing an AI course?",
      showtitle:
        "  Yes, after successfully completing a course, you will receive a digital certificate  that  you can add to your resume and LinkedIn profile to showcase your newfound AI  expertise  to potential employers.",
        targetId:"panelsStayOpen-headingFour",
        ariaControls:"panelsStayOpen-collapseFour",
    },
    {
      id: 5,
      toggleId: 4,
      title: " Is there support available during the course?",
      showtitle:
        " Absolutely! We offer comprehensive support throughout your learning journey. This  includes access to mentorship from experts, a community forum for peer discussion,  and  dedicated technical assistance when needed.",
        targetId:"panelsStayOpen-headingFive",
        ariaControls:"panelsStayOpen-collapseFive",
      },

  ];
  const circleData = [
    {
      id: 1,
      toggleId: 0,
      label: "Background",
    
    },
    { id: 2,    toggleId: 1, label: "Duration", targetId: "accordion-item" },
    {
      id: 3,
      toggleId: 2,
      label: "Skills",
   
    },
    {
      id: 4,
      toggleId: 3,
      label: "Certification",
    
    },
    {
      id: 5,
      toggleId: 4,
      label: "Support",
    },
  ];
  return (
    <>
      <Navbar
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Banner
        layout={true}
        title="AI TRAINING & EMPOWERMENT"
        paragraph="Unlock the Full Potential of Your Team with Tailored AI
Education and Skills Development"
   margin="16px"
         widthclass="70%"
      />
      <section class="service-section section-b-space mt-2 training" style={{paddingTop: "200px"}}>
        <div class="container">
          <div class="row g-5 expertise_div">
            <div class="col-lg-6">
              <div class="service-info">
                <div>
                  <Headingh4
                    heading="AI Mastery for Business Growth"
                    style={{
                      color: "#00BDFF",
                      marginBottom: "2rem",
                    }}
                  />
                  <div class="title">
                    <h2>
                      Accelerate Your AI Expertise and{" "}
                      <span style={{ color: "#ffce00" }}>Drive Impact</span>
                    </h2>
                  </div>
                  <Para
                    paragraph="In today’s fast-evolving world, staying ahead means continuously learning
                                and adapting. Our AI training and education programs are designed to
                                equip your team with the skills needed to harness the power of AI
                                products and apps to optimize their work and drive your business
                                forward. Whether you’re looking to upskill your employees or foster a
                                culture of innovation, our comprehensive courses have you covered."
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "1rem",
                
                }}
                src={Training}
                alt=""
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section-b-space barry_expertise_section">
        <div class="container">
          <div
            class="service-info"
            style={{ position: "relative", margin: "6rem 0" }}
          >
            <div>
              <div class="title">
                <Headingh4
                  style={{ color: "#00BDFF" }}
                  heading="Purpose-Driven Learning"
                />
                <H2
                  className="text-white"
                  title1="Why Choose Our"
                  breakpoint={false}
                  spanstyle={{ color: "#ffce00" }}
                  title="AI Training Programs?"
                />
              </div>
              <Para
                className="service_paragraph "
                style={{ fontSize: "1.2rem" }}
                paragraph="Your learning journey should be
                        more than just about gaining knowledge—it’s about making an impact. Our programs are
                        tailored to help your team connect their personal goals to the broader mission of your
                        organization, ensuring each course is
                        aligned with real-world outcomes."
              />
            </div>
          </div>
          <div class="barry_expertise_container">
            {BarryBox.map((items) => (
              <article class="barry_exp_box" style={{boxShadow: items.shadow}} key={items.id}>
                <div class="exp_content">
                  <H2
                    className="heading"
                    headingstyle={{ fontWeight: "500" }}
                    title1={items.heading}
                  />
                  <Headingh3
                    className="text-white"
                    title={items.title}
                    showimage={false}
                  />
                  <Para paragraph={items.para} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="ai-features-section section-b-space service-section"
        id="how-it-work"
        style={{paddingTop: "125px"}}
      >
        <div className="container">
          <div className="title">
            <Headingh4
              style={{ color: "rgb(0 189 255)" }}
              heading="Maximize AI Skills with Flexible, Practical Training"
            />
            <H2
              spanstyle={{ color: "#ffce00" }}
              title="Course Benefits"
              className="text-white"
              title2="at a Glance"
              breakpoint={false}
            />
          </div>

          <Para
            style={{ color: "#959799", fontSize: "19.2px" }}
            paragraph="Our courses are designed to meet the diverse needs of your team, no matter their experience level. With flexible, self-paced learning options, employees can master AI skills at their own convenience. Expert mentors and a supportive community ensure guidance is available every step of the way, while hands-on projects provide practical, real-world experience to immediately apply AI solutions in the workplace."
          />
          <div className="ai-features-container">
            <div className="ai-vertical-line"></div>
            <AiFeatureBox AiFeatureBoxapi={AiFeatureBoxapi} />
          </div>
        </div>
      </section>
      <section class="faq-section" id="faq-section">
        <div class="container">
        <div class="title">
                        <h4 style={{color: "#00BDFF"}}>Your Questions, Answered</h4>
                        <h2 class="text-white">Frequently Asked <span style={{color: "#ffce00"}}>Questions</span>
                        </h2>
                    </div>
                    <p class="service_paragraph  mb-5" style={{fontSize: "1.2rem"}}>Find quick answers to common
                        questions about our AI training, course duration, certification, and support. We are here to
                        ensure
                        a seamless learning experience for you and your team.
                    </p>
          <div class="row ">
            <FAQ Faq={Faq} circleData={circleData} />
          </div>
        </div>
      </section>
      <CalltoAction
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
    </>
  );
}
