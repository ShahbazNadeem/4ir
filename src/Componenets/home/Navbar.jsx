
import Image from "next/image"
import Logo from "@/images/4IRLogomain.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
export default function Navbar(){
    return(
        <>
          <header>
            <button class="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span class="navbar-toggler-icon">
                    <FontAwesomeIcon icon={faBars} style={{color: "black"}} />
                </span>
            </button>
            <a>
                <Image src={Logo} class="img-fluid" id="logo-img" alt="logo"/>
            </a>
            <nav class="header-nav-middle">
                <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                    <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                        <div class="offcanvas-header navbar-shadow">
                            <h5 class="mb-0">Back</h5>
                            <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link" href=""  >Home</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" href="/about">About Us</Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <Link class="nav-link" href="" id="servicesLink">
                                        Services
                                    </Link>
                                    <button class="dropdown-toggle dropdown-arrow" id="servicesDropdown"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <li>
                                            <Link class="dropdown-item" href="">Strategic
                                                Counseling</Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" href="">AITalkAssist</Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" href="">Training &
                                                Education</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" href="/html/blog-grid.html">Blog</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" href="/html/contact-us.html">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <a data-cursor="pointer" href="./home.html" style={{position: "relative", marginTop: "-1.5rem", padding: "13px 32px"}}
                class="btn btn-theme d-sm-inline-block d-none" data-bs-toggle="modal"
                data-bs-target="#demo-modal"><span>Book a Demo</span></a>
        </header>
        </>
    )
}