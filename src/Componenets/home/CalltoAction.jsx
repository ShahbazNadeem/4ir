import Button from "../typography/button/Button"
import H2 from "../typography/h2/H2"
import Model from "../model/Model"
export default function CalltoAction({handleOpenModal, showModal, handleCloseModal}) {
  return(
    <>
      {showModal && <Model close={handleCloseModal} />}
      <section className="info-section section-b-space">
        <div className="container">
            <div className="info-box" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                <H2 className="text-white" title="Get Your Free Demo of AI TALK ASSIST Today!" />
                <Button className="info-btn btn d-sm-inline-block" title="Book a Demo" click={handleOpenModal}  />
                   
            </div>
        </div>
    </section>
    </>
  )
  
}