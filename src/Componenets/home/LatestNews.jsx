import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Headingh3 from "../typography/h3/Headingh3";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BlogBox from "../Blogcomponent/BlogBox";
export default function LatestNews({
  layout,
  heading,
  title1,
  title2,
  Blogapi,
  icon,
}) {
  return (
    <>
      <section className="news-section section-b-space" style={{padding: layout ? null :"calc(40px + 60 * (100vw - 320px) / 1600) 97px" }} >
        {layout ? (
          <>
            <div className="container">
              <Headingh3 title={heading} className="text-white text-center" />
            </div>
            <h1 className="title-basic" style={{ color: "#fff" }}>
              {title1} <span style={{ color: "#ffce00" }}>{title2}</span>
            </h1>
          </>
        ) : null}
        <div className="row news_container">
          <BlogBox Blogapi={Blogapi} icon={icon} />
        </div>
      </section>
    </>
  );
}
