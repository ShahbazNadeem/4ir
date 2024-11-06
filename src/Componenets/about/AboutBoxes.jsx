import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import LearnBtn from "../typography/button/LearnMorebtn"
export default function AboutBoxes({Box, icon, showbutton}){
return(
    <>
     <section className="section-b-space services_section">
        <div className="container" style={{marginLeft: "0px"}}>
            <div className="boxs_container">
                {Box.map((items)=>(
                <Link href="" key={items.id}>
                    <div className={`box ${showbutton ? "boxcustom" : ""}`}>
                        <div className="box_img">
                            <Image src={items.image} alt="" />
                        </div>
                        <div className="box_content">
                            <p>{items.heading}</p>
                            <h4 className="box_text">{items.title}</h4>
                            <p>{items.para}
                            </p>
                            {showbutton &&(
                            <LearnBtn datacursor="pointer" className={`btn-arrow mt-5 btn-hover ${showbutton ? "w-100" : ""}`} iconClass="icon-arrow" link="" icon={icon} />
                            )}
                        </div>
                    </div>
                </Link>

                ))}

            </div>
        </div>
    </section>
    </>
)
}