'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Button from "../typography/button/Button";
import Heading5 from "../typography/h5/Heading5";
import Model from "../model/Model";
import Logo from "@/images/4IRLogomain.png";

export default function Navbar({ showModal, handleOpenModal, handleCloseModal }) {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {  // Adjust this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup listener on unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      {showModal && <Model close={handleCloseModal} />}
      <div id="home-header" > {/* Add sticky class dynamically */}
        <header className={isSticky ? "sticky" : ""}>
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
          <Link href="/" style={{ cursor: "pointer" }}>
            <Image src={Logo} className="img-fluid" id="logo-img" alt="logo" />
          </Link>
          <nav className="header-nav-middle">
            <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
              <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                <div className="offcanvas-header navbar-shadow">
                  <Heading5 title="Back" className="mb-0" />
                  <button
                    className="btn-close lead"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>
                    <li className={`nav-item ${router.pathname === '/about' ? 'active' : ''}`}>
                      <Link className="nav-link" href="/about">
                        About Us
                      </Link>
                    </li>
                    <li className={`nav-item dropdown ${router.pathname.startsWith('/services') ? 'active' : ''}`}>
                      <Link
                        className="nav-link"
                        href="/services"
                        id="servicesLink"
                      >
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
                          <Link className="dropdown-item" href="/services/StrategicCounseling">
                            Strategic Counseling
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/services/AitalkAssist">
                            AITalkAssist
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/services/TrainingEducation">
                            Training & Education
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={`nav-item ${router.pathname === '/blog' ? 'active' : ''}`}>
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className={`nav-item ${router.pathname === '/contact' ? 'active' : ''}`}>
                      <Link className="nav-link" href="/contact">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <Button
            style={{
              position: "relative",
              marginTop: "-1.5rem",
              padding: "13px 32px",
            }}
            click={handleOpenModal}
            title="Book a Demo"
            className="btn btn-theme d-sm-inline-block d-none"
          />
        </header>
      </div>
    </>
  );
}
