import Image from "next/image";
import Tick from "../../../public/assets/svg/tick.svg";
import Strategic from "@/images/services/strategicconsulting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AiSolution from "@/images/services/AIsolutions.png";
import Training from "@/images/services/trainingandeducation.png";
import Link from "next/link";
import LearnBtn from "../button/LearnMorebtn";

export default function Service({
  main,
  heading,
  paragraph,
  number,
  image,
  imgWidth,
  imgHeight,
  layout,
  ticktitle1,
  ticktitle2,
  ticktitle3,
  ticktitle4,
}) {
  return (
    <>
      <section className={`${main}`}>
        <div
          className="bg-effect"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <div className="container">
          <div
            className={`row g-md-5 g-4 ${layout ? " flex-row-reverse" : ""}`}
          >
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="about-content">
                <h1 className="text-white">
                  What we <span style={{ color: "#ffce00" }}>Offer</span>
                </h1>
                <div>
                  <div className="title">
                    <span className="number-pattern">{number}</span>
                    <h2 className="text-white">{heading}</h2>
                  </div>
                  <p>{paragraph}</p>
                  <ul>
                    {[
                      { title: ticktitle1 },
                      { title: ticktitle2 },
                      { title: ticktitle3 },
                      { title: ticktitle4 },
                    ]
                      // If `layout` is true, show all items; otherwise, only the first three
                      .slice(0, layout ? 4 : 3)
                      .map((item, index) => (
                        <li key={index}>
                          <Image src={Tick} className="img-fluid" alt="tick" />
                          {item.title}
                        </li>
                      ))}
                  </ul>
                </div>
                <LearnBtn
                  datacursor="pointer"
                  className="btn-arrow mt-5 btn-hover"
                  link=""
                  iconClass="icon-arrow"
                  width="47%"
                  icon={faArrowUp}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  style={{ width: imgWidth, height: imgHeight }}
                  src={image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section  */}
      {/* <section class={`${main}`}>
        <div class="bg-effect" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"></div>
        <div class="container">
            <div class="row g-md-5 g-4">
                <div class="col-lg-6 order-lg-0 order-1">
                    <div class="about-content">
                        <div>
                            <div class="title">
                                <span class="number-pattern">03.</span>
                                <h2 class="text-white">Training & Education</h2>
                            </div>
                            <p>Experience the power of 4irinc AI and revolutionise your social media presence. Say
                                goodbye to writer's block and hello to compelling hashtags, captivating captions, and
                                endless content possibilities.</p>
                            <ul>
                                <li><Image src={Tick} class="img-fluid" alt="tick" />Curate endless
                                    content possibilities that make your website shine. </li>
                                <li><Image src={Tick} class="img-fluid" alt="tick" />Generates compelling
                                    hashtags that skyrocket your reach</li>
                                <li><Image src={Tick} class="img-fluid" alt="tick" />Unlock a world of
                                    unlimited content ideas that keep your followers hooked.</li>
                            </ul>
                        </div>
                        <LearnBtn datacursor="pointer" className="btn-arrow mt-5 btn-hover" link="" iconClass="icon-arrow" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-img">
                        <Image style={{width: "100%", height: "88%"}} src={Training} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    </>
  );
}
