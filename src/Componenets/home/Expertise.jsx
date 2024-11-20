import Image from "next/image";
import Para from "../typography/paragrapgh/paragraph";
import Untitled from "@/images/Untitleddesign.svg"
export default function Expertise ({expertise, heading1, heading2, para}){
    return(
        <>
        <div className="service-section section-b-space mt-2 expertise" style={{paddingTop: "178px", paddingBottom: "0px"}}>
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
                <div className="col-lg-6">
                    <Image src={Untitled} alt="expertise section" style={{width: "100%", paddingBottom: "200px"}} />
                </div>


            </div>
        </div>
    </div>
        </>
    )
}