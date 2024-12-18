import Heading1 from "../typography/h1/Heading1";
import Headingh2 from "@/typography/h2/Heading2";
import Para from "../typography/paragrapgh/paragraph";

export default function Banner({ heading, title, paragraph,size,margin, layout ,fadeRight, fadeLeft ,contactClass,widthclass, marginLeft }) {
  return (
    <>
      <section id="home"  className={`section-b-space banner-img home-section ${contactClass || ""}`}>
        <div class="container-fluid">
          <div
            class="home-sec"
            style={{
              textAlign: "center ",
              justifyContent: "center",
              display: "flex",
              marginLeft: margin
            }}
          >
            <div  data-aos={fadeLeft}

    data-aos-delay="50"
    data-aos-duration="1000" class="home-content home-content1" style={{ marginLeft: marginLeft ? marginLeft:"none", marginTop: "5rem",  width: widthclass ? widthclass : "auto" }}>
              <div className="contact-heading">
                {layout ? null : (
                  <div className="">
                    <Headingh2
                      headingstyle={{
                        fontSize: "20px",
                        fontFamily: "'Play Sans', sans-serif",
                      }}
                      title={heading}
                    />
                  </div>
                )}
                <Heading1 className='heading' headingstyle={{fontSize: size}}  title={title} />
                <Para className='para' style={{width: "auto"}} paragraph={paragraph} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
