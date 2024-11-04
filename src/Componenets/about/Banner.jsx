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

    <h2 style={{fontSize: "20px"}}>{heading}
                            </h2>
</div>

                            )}
                            <h1>{title}</h1>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}