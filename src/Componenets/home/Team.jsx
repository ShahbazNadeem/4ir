import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Headingh4 from "../typography/h4/H4";
import Para from "../typography/paragrapgh/paragraph";
import Headingh2 from "../typography/h2/H2";
import MainBox from "../mainbox/MainBox";
export default function Team({
  heading,
  img1,
  img2,
  ServiceBox,
  layout,
}) {
  return (
    <>
      <section className="team-section section-b-space">
        <div className="bg-effect">
          <Image src={img1} className="img-fluid feature-left" alt="" />
          <Image src={img1} className="img-fluid feature-right" alt="" />
          <Image src={img2} className="img-fluid feature-bg" alt="" />
          <span className="round-effect"></span>
        </div>
        <div className="container">
          {layout ? (
            <div className="service-info">
              <div>
                <div className="title">
                  <Headingh4 style={{ color: "#00BDFF", marginBottom: "1rem" }} heading="Leadership That Drives Transformation" />
                 
                  <h2>
                    Our <span style={{ color: "#ffce00" }}>Expert</span> Team
                  </h2>
                </div>
                <Para paragraph=" Our team of AI and digital transformation experts is dedicated
                  to guiding your business through the complexities of the
                  Fourth Industrial Revolution. With deep industry knowledge and
                  innovative strategies, we help you achieve sustainable growth
                  and success." className="service_paragraph" style={{ marginBottom: "2rem" }} />
              </div>
            </div>
          ) : (
            <div className="title-basic text-center">
              <h2 className="text-white">
                Our <span style={{ color: "#ffce00" }}>Expert</span> Team
              </h2>
              <Headingh2 title={heading} />
            </div>
          )}
          <div
            className="row d-flex justify-content-evenly align-items-center gap-3 feature_container"
            style={{ marginLeft: "7%" }}
          >
            <MainBox ServiceBox={ServiceBox} />
          </div>
        </div>
      </section>
    </>
  );
}
