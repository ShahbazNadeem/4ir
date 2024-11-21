import Image from "next/image";
import Para from "../typography/paragrapgh/paragraph";
import Untitled from "@/images/img_1.png"
export default function Expertise ({expertise, heading1, heading2, para}){
    return(
        <>
        <div className="service-section section-b-space mt-2 expertise home-expertise" style={{paddingTop: "50px", paddingBottom: "0px", maxHeight: "100%"}}>
        <div className="container">
            <div className="row g-5 expertise_div">
                <div className="col-lg-6">
                    <div className="service-info">
                        <div>
                            <Para paragraph={expertise} style={{fontSize: "38px", position: "relative", bottom: "1rem"}} className="text-white" />
                            <div className="title">
                                <h2>{heading1} <span style={{color: "#ffce00"}}>{heading2}</span></h2>
                            </div>
                            <Para paragraph={para} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center expertise_section_img">
                    <Image src={Untitled} className="img-fluid" alt="expertise section"/>
                </div>


            </div>
        </div>
    </div>
        </>
    )
}