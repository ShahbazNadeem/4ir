import { useState } from "react";
import Image from "next/image";
import Logo from "@/images/4IRLogomain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header>
        <button
          className="navbar-toggler d-xl-none d-inline navbar-menu-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#primaryMenu"
        >
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
          </span>
        </button>
        <a>
          <Image src={Logo} className="img-fluid" id="logo-img" alt="logo" />
        </a>
        <nav className="header-nav-middle">
          <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
            <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mb-0">Back</h5>
                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" href="/services" id="servicesLink">
                      Services
                    </Link>
                    <button
                      className="dropdown-toggle dropdown-arrow"
                      id="servicesDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                      <li>
                        <Link className="dropdown-item" href="">Strategic Counseling</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="">AITalkAssist</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="">Training & Education</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/html/blog-grid.html">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/html/contact-us.html">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <button
          data-cursor="pointer"
          style={{ position: "relative", marginTop: "-1.5rem", padding: "13px 32px" }}
          className="btn btn-theme d-sm-inline-block d-none"
          onClick={handleOpenModal}
        >
          <span>Book a Demo</span>
        </button>
      </header>

      {/* Modal */}
      {showModal && (
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
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
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
                <button type="button" className="btn btn-theme" onClick={handleCloseModal}
 >Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
