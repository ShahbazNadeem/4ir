import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Homebg from "@/images/home/home-bg.gif"
import titleeffect from "@/images/title-effect.png"
import hand from "@/images/landing/ai_talk_assist/hand.png"
import Home1 from "../../../public/assets/svg/home/1.png"
import Home2 from "../../../public/assets/svg/home/2.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faParagraph } from '@fortawesome/free-solid-svg-icons';
import Mainlogo from "@/images/4IRLogomain.png"
import Demobtn from '@/Componenets/book a demo button/Demobtn';
import AboutBoxes from '@/Componenets/about/AboutBoxes';
import Live from "@/images/landing/ai_talk_assist/Feature Pics/Live Transfers.png"
import Appointment from "@/images/landing/ai_talk_assist/Feature Pics/Appointment Scheduling.png"
import Lead from "@/images/landing/ai_talk_assist/Feature Pics/Lead Qualification.png"
import Customer from "@/images/landing/ai_talk_assist/Feature Pics/Customer Support (Q_A).png"
import Communication  from "@/images/landing/ai_talk_assist/Feature Pics/Off-Hours Communication Handling.png"
import Training from "@/images/landing/ai_talk_assist/Feature Pics/Staff Training.png"

const AitalkAssist = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    // const Box = [
    //     {
    //         id: 1,
    //         image: Live,
    //         heading: "Live Transfers",
    //         title: "Seamlessly connect your customers with the right team members in real-time.",
    //         para: "Our AI-powered system transfers calls directly to your staff, ensuring high-priority calls are handled by the appropriate agents. Enhances customer experience and operational efficiency."
    //     },
    //     {
    //         id: 2,
    //         image: Appointment,
    //         heading: "Appointment Scheduling",
    //         title: "Automate your appointment setting with precision and ease.",
    //         para: "AI Talk Assist helps avoid scheduling conflicts by synchronizing with your existing calendar system. Your team remains organized and efficient."
    //     },
    //     {
    //         id: 3,
    //         image: Lead,
    //         heading: "Lead Qualification",
    //         title: "Identify and prioritize high-quality leads.",
    //         para: "Our AI identifies qualified leads quickly, allowing your team to focus on potential clients who are most likely to convert, boosting your sales pipeline."
    //     },
    //     {
    //         id: 4,
    //         image: Customer,
    //         heading: "Customer Support (Q&A)",
    //         title: "Provide instant answers to common questions.",
    //         para: "Automate responses to frequently asked questions, reducing the workload on support teams and giving customers the information they need fast."
    //     },
    //     {
    //         id: 5,
    //         image: Communication,
    //         heading: "Off-Hours Communication Handling",
    //         title: "Never miss a customer interaction.",
    //         para: "AI manages customer interactions outside business hours, ensuring that all customer inquiries are acknowledged, improving engagement."
    //     },
    //     {
    //         id: 6,
    //         image: Training,
    //         heading: "Staff Training",
    //         title: "Streamline training processes with AI insights.",
    //         para: "AI-based training tools provide staff with personalized learning experiences, speeding up onboarding and skill development."
    //     },
    // ];
  return (
    <>
      <header>
            <button class="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span class="navbar-toggler-icon">
                    <i class="iconsax" data-icon="text-align-justify"></i>
                </span>
            </button>
            <Link  href="/">
            <Image src={Mainlogo} id="logo-img" style={{position: "relative", marginTop: "-0.6rem"}}
                class="img-fluid" alt="logo" />
            </Link>
            <nav class="header-nav-middle">
                <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                    <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                        <div class="offcanvas-header navbar-shadow">
                            <h5 class="mb-0">Back</h5>
                            <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" style={{paddingBottom:"10px"}} href="#feature-section">Features</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#how-it-work">How It Works</a>
                                </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#testimonial-section">Testimonials</a>
                            </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#faq-section">FAQ</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Demobtn showModal={showModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
        </header>
      <section id="home" class="home-section aitalkassist">
            <div class="container" style={{marginTop: "10rem"}}>
                <div class="row">
                    <div class="col-12">
                        <div class="home-content">
                            <div class="bg-effect">
                                <Image src={Homebg} class="img-fluid bg-gif" alt="" />
                                <Image src={Home1} class="img-fluid effect1 rotate-effect" alt="" />
                                <Image src={Home2} class="img-fluid effect2 rotate-effect" alt="" />
                            </div>
                            <div style={{marginLeft: "90px"}}>
                                <h1>Transform Your Customer
                                    Experience with <br />
                                    <div class="title-effect"><Image src={titleeffect} alt="" /><span
                                            style={{color: "#ffce00"}}>AI TALK ASSIST</span>
                                    </div>
                                </h1>
                                <p>
                                    Experience the convenience of AI-driven calls. Let technology handle your
                                    communication
                                    needs effortlessly, saving you time and hassle.

                                </p>
                                <Link class="start-link mic_text" href="" style={{color: "white", textDecoration: "none", backgroundColor: "#8800ff",fontSize: "calc(18px + 4*(100vw - 320px) / 1600)"}}>Give it a try!</Link>
                            </div>
                        </div>
                        <div class="home-laptop px-md-0 px-3">
                            <div class="laptop-sec position-relative">
                                <div class="mic-sec">
                                    <div class="mic-div" style={{marginLeft: "-250px"}}>
                                        <button type="button" class="mic listening ">
                                            <FontAwesomeIcon icon={faMicrophone} style={{color: "#00BDFF"}} />

                                            <canvas class="visualizer" width="300" height="100"
                                                style={{left: "100%"}}></canvas>
                                        </button>
                                        <Link style={{textDecoration: "none", fontSize: "1rem", color: "white", border: "1px solid #8800ff" , backgroundColor: "#8800ff ", display: "inline", borderRadius: "1rem", padding: "3px 12px"}} href="" >Book a
                                            Demo</Link>
                                    </div>
                                </div>
                                <div class="hand-sec" style={{position: "relative", marginTop: "16rem", top: "15rem"}}>
                                    <Image src={hand}
                                        class="img-fluid left-hand" style={{marginLeft: "5rem"}} alt="hand" />
                                    <Image src={hand}
                                        class="img-fluid right-hand" style={{marginRight: "5rem"}} alt="hand" />
                                
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* <AboutBoxes /> */}
    </>
  )
}

export default AitalkAssist