import Button from "../typography/button/Button";

export default function Model ({close}){
    return(
        <>
          <div className="modal fade show" style={{ display: "block" }} aria-labelledby="demo-modalLabel" aria-hidden="true"    data-aos="fade-down" 
        data-aos-duration="800" 
        data-aos-easing="ease-in-out">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-3 text-white text-center"
                  style={{ textAlign: "center" }}
                  id="demo-modalLabel"
                >
                  Book a <span style={{ color: "#ffce00" }}>Demo</span>
                </h1>
              </div>
              <div className="modal-body">
                <iframe
                  className="calendly-inline-widget"
                  src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                  style={{minWidth: "100%", height: "100%" }}
                   loading="lazy"
                ></iframe>
              </div>
              <div className="modal-footer">
                <Button className="btn btn-theme" click={close} title="Close"  />
              </div>
            </div>
          </div>
        </div>
        </>
    )
}