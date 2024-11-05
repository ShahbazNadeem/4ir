import { useState } from "react";
import Image from "next/image";
import Logo from "@/images/4IRLogomain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Demobtn from "../book a demo button/Demobtn";

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
        <Link href="/" style={{cursor:"pointer"}}>
          <Image src={Logo} className="img-fluid" id="logo-img" alt="logo" />
        </Link>
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
                        <Link className="dropdown-item" href="/services/StrategicCounseling">Strategic Counseling</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/services/AitalkAssist">AITalkAssist</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/services/TrainingEducation">Training & Education</Link>
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
        <Demobtn showModal={showModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
      </header>
    </>
  );
}
