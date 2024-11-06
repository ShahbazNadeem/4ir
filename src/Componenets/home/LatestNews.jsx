import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Headingh3 from "../typography/h3/Headingh3";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function LatestNews({ heading, title1, title2, Blogapi, icon }) {
  return (
    <>
      <section className="news-section section-b-space">
        <div className="container">
          <Headingh3 title={heading} className="text-white text-center" />
        </div>
        <h1 className="title-basic" style={{ color: "#fff" }}>
          {title1} <span style={{ color: "#ffce00" }}>{title2}</span>
        </h1>
        <div className="row news_container">
          {Blogapi.map((items) => (
            <div className={items.columnClass} key={items.id}>
              <div className={items.firstChildclass}>
                <div className={items.imageclass}>
                  {items.layout ? (
                    // <div>

                    //   <a data-cursor="pointer" href="">
                    //   <Image src={items.image} class="img-fluid" alt="blog" width={500} height={500} />
                    //   <FontAwesomeIcon
                    //    icon={faArrowRight}
                    //     style={{ color: "#fff" }}
                       
                    //   />
                    //           </a>
                    // </div>
                    <div class="hover-content">
                        <a data-cursor="pointer" href="">
                        <Image src={items.image} class="img-fluid" alt="blog" width={500} height={500} />
                        <FontAwesomeIcon
                         icon={faArrowRight}
                          style={{ color: "#fff" }}
                         
                        />
                                </a>
                      <h5>{items.author}</h5>
                    </div>
                  ) : (
                    <Image
                      src={items.image}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  )}
                </div>
                <div className={items.contentClass}>
                  <h3>
                    <Link href="blog-details.html">{items.blogtitle}</Link>
                  </h3>
                  <p>{items.description}</p>
                  <div data-cursor="pointer" className="link-overflow">
                    <Link href="">
                      Read more{" "}
                      <FontAwesomeIcon
                        icon={icon}
                        style={{ color: "rgb(109 113 122)" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
