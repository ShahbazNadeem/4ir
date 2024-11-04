export default function Expertise ({expertise, heading1, heading2, para}){
    return(
        <>
        <div className="service-section section-b-space mt-2">
        <div className="container">
            <div className="row g-5 expertise_div">
                <div className="col-lg-6">
                    <div className="service-info">
                        <div>
                            <p style={{fontSize: "38px", position: "relative", bottom: "1rem"}} className="text-white">{expertise}</p>
                            <div className="title">
                                <h2>{heading1} <span style={{color: "#ffce00"}}>{heading2}</span></h2>
                            </div>
                            <p>{para}</p>
                        </div>
                    </div>
                </div>
                <div classNameName="col-lg-6"></div>


            </div>
        </div>
    </div>
        </>
    )
}