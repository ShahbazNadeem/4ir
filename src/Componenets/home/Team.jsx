import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Team({heading,img1, img2,personimg1,personimg2,icon, nameBarry, nameShane , Barrydes, Shanedes}){
    return(
        <>
         <section class="team-section section-b-space">
        <div class="bg-effect">
            <Image src={img1} class="img-fluid feature-left" alt="" />
            <Image src={img1} class="img-fluid feature-right" alt="" />
            <Image src={img2} class="img-fluid feature-bg" alt="" />
            <span class="round-effect"></span>
        </div>
        <div class="container">
            <h2 class="text-center text-white">Our <span style={{color: "#ffce00"}}>Expert</span> Team</h2>
            <div class="title-basic">
                <h2>{heading}</h2>
            </div>
            <div class="row d-flex justify-content-evenly align-items-center gap-3 feature_container"
                style={{marginLeft: "-12%"}}>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="team-box">
                        <Image src={personimg1} alt="" />
                        <div class="feature-top mt-4">
                            <h3>{nameBarry}</h3>
                        </div>
                        <h4 style={{textAlign: "start", marginLeft: "1rem", marginTop: "1rem"}}>{Barrydes}
                        </h4>
                        <div data-cursor="pointer" class="link-overflow"><a href="">Read more <FontAwesomeIcon icon={icon} style={{color: "grey", paddingTop: "4px"}} /></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="team-box">
                        <Image style={{left: "-4%"}} src={personimg2} alt="" />
                        <div class="feature-top mt-4">
                            <h3>{nameShane}</h3>
                        </div>
                        <h4 style={{textAlign: "start", marginLeft: "1rem", marginTop: "1rem"}}>{Shanedes}
                        </h4>
                        <div data-cursor="pointer" class="link-overflow"><a
                                href="" target="_blank">Read more <FontAwesomeIcon icon={icon} style={{color: "grey", paddingTop: "4px"}} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}