import AboutBoxes from "./AboutBoxes";
import Strategic from "@/images/services/strategicconsulting.png";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Headingh4 from "../typography/h4/H4";

export default function Detail({ layout, heading, title1, title2, paragraph, white , spancontent1 , spancontent2, Box}) {
    return (
        <>
            <div className="service-section section-b-space mt-2">
                <div className="container">
                    <div className="row g-5">
                        <div className="service-info">
                            <div>
                                <div className="title">
                              
                                    <h2>
                                        <span style={{ color: "#ffce00" }}>{title1}</span> {title2}
                                    </h2>
                                </div>
                                <p className="service_paragraph" style={{ marginBottom: "2rem", color:white }}>
                                   {paragraph}
                                   {/* <br /><br />
                                   <span style={{fontSize: "0.87rem"}}> {spancontent1}</span>
                                   <br /><br />
                                   <span style={{fontSize: "0.87rem"}}>{spancontent2}</span> */}
                                   
                                </p>

                                {layout && (
                                    <div className="card text-center" style={{ backgroundColor: "transparent", marginTop: "1.5rem", borderColor: "#00BDFF" }}>
                                        <div className="card-header">
                                            <ul className="nav nav-tabs card-header-tabs">
                                                <li className="nav-items">
                                                    <p className="nav-links active" data-tab="mission">Our Mission</p>
                                                </li>
                                                <li className="nav-items">
                                                    <p className="nav-links" data-tab="vision">Our Vision</p>
                                                </li>
                                                <li className="nav-items">
                                                    <p className="nav-links" data-tab="value">Our Value</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                Empowering businesses and solopreneurs to think big and embrace the Fourth Industrial Revolution. We offer cutting-edge solutions and expert support for digital transformation. Our commitment is to help clients navigate technological changes and achieve sustainable growth.
                                            </p>
                                        </div>
                                    </div>
                                )}
                    {Box?(  <AboutBoxes image1={Strategic} image2={AiSolution} image3={Training} icon={faArrowRight}/>): null}
                    {/* <div className="title">
                                    <h4 style={{ color: "#00BDFF", marginBottom: "1rem" }}>
                                       {heading}
                                    </h4>
                                    <h2>
                                        <span style={{ color: "#ffce00" }}>{title1}</span> {title2}
                                    </h2>
                                </div>
                                <p className="service_paragraph" style={{ marginBottom: "2rem", color:white }}>
                                   {paragraph}
                                   <br /><br />
                                   <span style={{fontSize: "0.87rem"}}> {spancontent1}</span>
                                   <br /><br />
                                   <span style={{fontSize: "0.87rem"}}>{spancontent2}</span>
                                   
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
