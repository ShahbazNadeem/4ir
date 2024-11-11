import Heading1 from "../typography/h1/Heading1";
import Headingh2 from "@/typography/h2/Heading2";
import Para from "../typography/paragrapgh/paragraph";

export default function Banner({ heading, title, paragraph,size, layout ,fadeRight, fadeLeft ,contactClass,widthclass, marginLeft }) {
  return (
    <>
      <section id="home"  className={`section-b-space home-section ${contactClass || ""}`}>
        <div class="container-fluid">
          <div
            class="home-sec"
            style={{
              textAlign: "center ",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div  data-aos={fadeLeft}

    data-aos-delay="50"
    data-aos-duration="1000" class="home-content" style={{ marginLeft: marginLeft ? marginLeft:"none", marginTop: "5rem",  width: widthclass ? widthclass : "auto" }}>
              <div>
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
                <Heading1 headingstyle={{fontSize: size}}  title={title} />
                <Para style={{width: "auto"}} paragraph={paragraph} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
