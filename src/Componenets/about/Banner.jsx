import Heading1 from "../typography/h1/Heading1";
import Headingh2 from "../typography/h2/H2";
import Para from "../typography/paragrapgh/paragraph";

export default function Banner({heading, title, paragraph,layout}){
    return(
        <>
              <section id="home" class="section-b-space home-section">
            <div class="container-fluid">
                <div class="home-sec" style={{textAlign: "center ",justifyContent: "center", display: "flex"}}>
                    <div class="home-content" style={{marginTop: "5rem"}}>
                        <div>
                            {layout? null: (
<div className="">

    <Headingh2 headingstyle={{ fontSize: "20px", fontFamily: "'Play Sans', sans-serif" }} title={heading} />
                            
</div>

                            )}
                            <Heading1 title={title} />
                            <Para paragraph={paragraph} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}