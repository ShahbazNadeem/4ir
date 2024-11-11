"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Button1 from "../typography/button/Button";
import Heading5 from "../typography/h5/Heading5";
import Model from "../model/Model";
import Logo from "@/images/4IRLogomain.png";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Nav, NavItem, NavLink } from "reactstrap";

export default function Navbar({ showModal, handleOpenModal, handleCloseModal }) {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track offcanvas visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Scroll event to change sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Toggle offcanvas visibility
  const toggleOffcanvas = () => setIsOpen(!isOpen);

  return (
    <>
      {showModal && <Model close={handleCloseModal} />}
      <div id="home-header">
        <header className={isSticky ? "sticky" : ""}>
          {/* Navbar Toggler (Hamburger Button) */}
          <button
            className="navbar-toggler d-xl-none d-inline navbar-menu-button"
            type="button"
            onClick={toggleOffcanvas} // Open/close the offcanvas on click
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
            </span>
          </button>

          {/* Logo */}
          <Link href="/" style={{ cursor: "pointer" }}>
            <Image src={Logo} className="img-fluid" style={{ width: "auto" }} id="logo-img" alt="logo" priority />
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

          {/* Offcanvas Component */}
          <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} style={{    width: "297px"}} className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
        <OffcanvasHeader toggle={toggleOffcanvas} className="navbar-shadow d-flex align-items-center">
          <Heading5 title="Back" className="mb-0 back" />
          <Button color="link" className="btn-close" onClick={toggleOffcanvas}>
              <i class="ri-close-line"></i>
          </Button>
        </OffcanvasHeader>
        <OffcanvasBody className="offcanvas-body">
          <Nav vertical className="navbar-nav">
            <NavItem className={`nav-item1 ${router.pathname === '/' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className={`nav-item1 ${router.pathname === '/about' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem className={`nav-item1 dropdown ${router.pathname.startsWith('/services') ? 'active' : ''}`}>
      <NavLink className="nav-link1" href="/services" onClick={(e) => { e.preventDefault(); toggleDropdown(); }} id="servicesLink">
        Services
        <span onClick={toggleDropdown} style={{ cursor: 'pointer', marginLeft: '7.5rem' }}>
          {dropdownOpen ? <i class="ri-arrow-up-s-fill"></i>: <i class="ri-arrow-down-s-fill"></i>}
        </span>
      </NavLink>
      <ul className={`dropdown-menu sidebar-navlinks ${dropdownOpen ? 'show' : ''}`} aria-labelledby="servicesLink">
        <li>
          <Link className="dropdown-item1" href="/services/StrategicCounseling">
            Strategic Counseling
          </Link>
        </li>
        <li>
          <Link className="dropdown-item1" href="/services/AitalkAssist">
            AITalkAssist
          </Link>
        </li>
        <li>
          <Link className="dropdown-item1" href="/services/TrainingEducation">
            Training & Education
          </Link>
        </li>
      </ul>
    </NavItem>
            <NavItem className={`nav-item1 ${router.pathname === '/blog' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/blog">
                Blog
              </NavLink>
            </NavItem>
            <NavItem className={`nav-item1 ${router.pathname === '/contact' ? 'active' : ''}`}>
              <NavLink className="nav-link1" tag={Link} href="/contact">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>

          {/* Book a Demo Button */}
          <Button1
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
