import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Team({
  heading,
  img1,
  img2,
  personimg1,
  personimg2,
  icon,
  nameBarry,
  nameShane,
  Barrydes,
  Shanedes,
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
                  <h4 style={{ color: "#00BDFF", marginBottom: "1rem" }}>
                    Leadership That Drives Transformation
                  </h4>
                  <h2>
                    Our <span style={{ color: "#ffce00" }}>Expert</span> Team
                  </h2>
                </div>
                <p
                  className="service_paragraph"
                  style={{ marginBottom: "2rem" }}
                >
                  Our team of AI and digital transformation experts is dedicated
                  to guiding your business through the complexities of the
                  Fourth Industrial Revolution. With deep industry knowledge and
                  innovative strategies, we help you achieve sustainable growth
                  and success.
                </p>
              </div>
            </div>
          ) : (
            <div className="title-basic text-center">
              <h2 className="text-white">
                Our <span style={{ color: "#ffce00" }}>Expert</span> Team
              </h2>
              <h2>{heading}</h2>
            </div>
          )}
          <div
            className="row d-flex justify-content-evenly align-items-center gap-3 feature_container"
            style={{ marginLeft: "7%" }}
          >
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-box">
                <Image src={personimg1} alt="" />
                <div className="feature-top mt-4">
                  <h3>{nameBarry}</h3>
                </div>
                <h4
                  style={{
                    textAlign: "start",
                    marginLeft: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  {Barrydes}
                </h4>
                <div data-cursor="pointer" className="link-overflow">
                  <Link href="">
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={icon}
                      style={{ color: "grey", paddingTop: "4px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team-box">
                <Image style={{ left: "-4%" }} src={personimg2} alt="" />
                <div className="feature-top mt-4">
                  <h3>{nameShane}</h3>
                </div>
                <h4
                  style={{
                    textAlign: "start",
                    marginLeft: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  {Shanedes}
                </h4>
                <div data-cursor="pointer" className="link-overflow">
                  <Link href="" target="_blank">
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={icon}
                      style={{ color: "grey", paddingTop: "4px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
