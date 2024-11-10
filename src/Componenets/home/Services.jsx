import Image from "next/image";
import Tick from "../../../public/assets/svg/tick.svg";
import Strategic from "@/images/services/strategicconsulting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import Link from "next/link";
import LearnBtn from "../typography/button/LearnMorebtn";
import Headingh2 from "@/typography/h2/Heading2";
import Para from "../typography/paragrapgh/paragraph";

export default function Service({ Services }) {
  return (
    <>
      {Services.map((items) => (
        <section key={items.id} className={items.main}>
          <div
            className="bg-effect"
            data-aos={items.aos}
            data-aos-duration="1000"
            data-aos-delay="500"
          ></div>
          <div className="container">
            <div style={{display: "flex"}}
              className={`row g-md-5 g-4 ${
                items.layout ? " flex-row-reverse" : ""
              }`}
            >
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="about-content">
                  <h1 className="text-white">
                    What we <span style={{ color: "#ffce00" }}>Offer</span>
                  </h1>
                  <div>
                    <div className="title">
                      <span className="number-pattern">{items.number}</span>
                      <Headingh2
                        className="text-white"
                        secondtitle={items.heading}
                      />
                    </div>
                    <Para paragraph={items.paragraph} />

                    <ul>
                     {items.ticktitle.map((item)=>(
                          <li key={item.id}>
                            <Image
                              src={Tick}
                              className="img-fluid is working"
                              alt="tick"
                            />
                            {item}
                          </li>
                     ))}
                     
                    </ul>
                  </div>
                  <LearnBtn
                    datacursor="pointer"
                    className="btn-arrow mt-5 btn-hover"
                    link={items.link}
                    iconClass="icon-arrow"
                    width="47%"
                    size="18px"
                    icon={faArrowUp}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img">
                  <Image
                    style={{ width: items.imgWidth, height: items.imgHeight }}
                    src={items.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
