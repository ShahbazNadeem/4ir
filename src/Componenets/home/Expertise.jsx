export default function Expertise ({expertise, heading1, heading2, para}){
    return(
        <>
        <div class="service-section section-b-space mt-2">
        <div class="container">
            <div class="row g-5 expertise_div">
                <div class="col-lg-6">
                    <div class="service-info">
                        <div>
                            <p style={{fontSize: "38px", position: "relative", bottom: "1rem"}} class="text-white">{expertise}</p>
                            <div class="title">
                                <h2>{heading1} <span style={{color: "#ffce00"}}>{heading2}</span></h2>
                            </div>
                            <p>{para}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6"></div>


            </div>
        </div>
    </div>
        </>
    )
}