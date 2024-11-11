import { useRouter } from "next/router";
import Link from "next/link";
import Blogapi from "./secondblogapi.json";
import Image from "next/image";
import Breadcrumbimg from "@/images/breadcrumb-title.png";
import Svg from "../../../public/assets/svg/blog-details-vector.svg";
import Navbar from "@/Componenets/home/Header";
import { useState, useEffect } from "react";
import User2 from "@/images/user/2.jpg";
import Headingh3 from "@/Componenets/typography/h3/Headingh3";
import Svg2 from "../../../public/assets/svg/title-effect2.svg";
import Para from "@/Componenets/typography/paragrapgh/paragraph";
import H2 from "@/Componenets/typography/h2/Heading2";
import Testimonial from "@/Componenets/clientreview/Testimonial";
import CalltoAction from "@/Componenets/home/CalltoAction";
import Footer from "@/Componenets/home/Footer";

export default function BlogPost() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      const foundData = Blogapi.find((blog) => blog.slug === slug);
      setData(foundData);
    }
  }, [slug]);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
      />
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div>
                  <H2 title1="Blog Details" breakpoint={true} imgsrc={Breadcrumbimg} />
                  <Para paragraph="Discover the most recent blogs about artificial intelligence here." iconadd={true} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-inline-block d-none">
              <div className="breadcrumb-img">
                <Image src={Svg} className="img-fluid" alt="service" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {data && (
        <section className="ratio_40">
          <div className="container" style={{padding: "0px 90px"}}>
            <div className="blog-details" id="blog_detail_container">
              <div className="blog-img bg-size" style={{backgroundImage: data.image ? `url(${data.image})` : `url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh',
        position: "relative"}}>
              </div>
              <div className="blog-title-box">
                <span
                  data-cursor="pointer"
                  className="main-title"
                  id="current_blog_title"
                >
                  {data.blogtitle}
                </span>
                <ul>
                  <li>
                    <Image src={User2} className="img-fluid avtar" alt="author" priority />{" "}
                    <span id="current_blog_author">{data.author}</span>
                  </li>
                  <li>
                    <i className="ri-calendar-todo-line"></i>{" "}
                    <span className="current_blog_date">{data.date}</span>
                  </li>
                  <li>
                    <i className="ri-time-line"></i> 5 min
                  </li>
                </ul>
              </div>

              <div className="current_blog_description">
                <div className="row">
                  <div className="col-lg-8 col-md-10 m-auto">
                    <div className="blog-main-content">
                      {data.blogcontent.map((items) => (
                        <div key={items.id}>
                          <Headingh3
                            imageclass="img-fluid title-effect"
                            className="mt-xl-5 mt-md-3 mt-2"
                            image={items.image}
                            imgstyle={{ width: "62px" }}
                            showimage={true}
                            title={items.heading}
                          />
                          <Para
                            className="current_blog_overview"
                            paragraph={items.para}
                          />

                        
                          {items.li && (
                            <ol>
                              {items.li.map((listItem) => (
                                <li key={listItem.id}>{listItem.title}</li>
                              ))}
                            </ol>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <CalltoAction  handleOpenModal={handleOpenModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal} />
      <Footer />
    </>
  );
}
