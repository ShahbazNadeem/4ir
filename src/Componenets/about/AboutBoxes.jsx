import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import LearnBtn from "../button/LearnMorebtn"
export default function AboutBoxes({Box, icon}){
return(
    <>
     <section class="section-b-space services_section">
        <div class="container" style={{marginLeft: "0px"}}>
            <div class="boxs_container">
                {Box.map((items)=>(
                <Link href="" key={items.id}>
                    <div class="box">
                        <div class="box_img">
                            <Image src={items.image} alt="" />
                        </div>
                        <div class="box_content">
                            <p>{items.heading}</p>
                            <h4 class="box_text">{items.title}</h4>
                            <p>{items.para}
                            </p>
                            <LearnBtn datacursor="pointer" className="btn-arrow mt-5 btn-hover" iconClass="icon-arrow" link="" icon={icon} />
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