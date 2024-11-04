import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import LearnBtn from "../button/LearnMorebtn"
export default function AboutBoxes({image1, image2, image3, icon}){
    const Box =[
        {
            id:1,
            image:image1,
            heading:"TAILORED STRATEGIES FOR BUSINESS SUCCESS",
            title:"Drive Growth with Strategic Consulting",
            para:"Our strategic consulting service is designed to help businesses identify opportunities, address challenges,and develop a roadmap for sustained growth. With a focus on AI integration, we ensure your business is prepared for the future of digital transformation."

        },
        {
            id:2,
            image:image2,
            heading:"CUTTING-EDGE AI SOLUTIONS FOR EFFICIENCY",
            title:"Enhance Operations with AI-Powered Solutions",
            para:"We offer custom AI solutions that automate and optimize key business functions. From AI-powered CRM tools to virtual assistants, our solutions are tailored to enhance your operations, reduce costs, and boost productivity across your organization."

        },
        {
            id:3,
            image:image3,
            heading:"CUSTOMIZED AI TRAINING PROGRAMS",
            title:"Empower Your Team with Training & Education",
            para:"Our AI training programs are designed to upskill your team, equipping them with the tools and knowledge they need to harness AI and digital technologies. We provide tailored courses that foster innovation, improve efficiency, and drive business growth."

        }
    ]
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
                            {/* <button data-cursor="pointer" class="btn-arrow mt-5 btn-hover">
                                <div class="icon-arrow"><FontAwesomeIcon icon={icon} style={{color: "black"}} /></div>Learn More
                            </button> */}
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