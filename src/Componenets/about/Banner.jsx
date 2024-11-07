import Heading1 from "../typography/h1/Heading1";
import Headingh2 from "../typography/h2/H2";
import Para from "../typography/paragrapgh/paragraph";

export default function Banner({ heading, title, paragraph, layout ,contactClass }) {
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
            <div class="home-content" style={{ marginTop: "5rem", width: "auto" }}>
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
                <Heading1 title={title} />
                <Para style={{width: "auto"}} paragraph={paragraph} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
