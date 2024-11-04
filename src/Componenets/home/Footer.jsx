import Image from "next/image"
import MainLogo from "@/images/main-logo.png"
import Facebook from "../../../public/assets/svg/social/fb.svg"
import Youtube from "../../../public/assets/svg/youtube.svg"
import Linkedin from "../../../public/assets/svg/social/Linkedin.svg"
import Star from "../../../public/assets/svg/star.svg"
import Link from "next/link"
export default function Footer() {
    return(
        <>
        <footer>
        <div className="container">
            <div className="footer-row">
                <div className="footer-main">
                    <Link href="#" className="footer-logo"><Image src={MainLogo} id="logo-img"
                            className="img-fluid" alt="" /></Link>
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <form>
                        <div className="input-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                placeholder="Enter your mail" />
                            <Link href="" data-cursor="pointer" className="btn-basic">Subscribe</Link>
                        </div>
                    </form>
                    <ul className="social-links">
                        <li><Link data-cursor="pointer" target="_blank" href="https://www.facebook.com/4IRinc"><Image
                                    src={Facebook} className="img-fluid" alt="facebook" /></Link></li>
                        <li><Link data-cursor="pointer" target="_blank"
                                href="https://www.linkedin.com/company/fourth-industrial-revolution-inc/"><Image
                                    src={Linkedin} className="img-fluid" alt="linkedin" /></Link></li>
                        <li><Link data-cursor="pointer" target="_blank" href="https://www.youtube.com/@BarryKrevoy"><Image
                                    src={Youtube} className="img-fluid" alt="youtube" /></Link></li>
                    </ul>
                </div>
                <div className="link-section">
                    <div className="footer-title">
                        <Image src={Star} className="img-fluid" alt="star" />
                        Quick Link
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li><Link data-cursor="pointer" href="/home.html">Home</Link></li>
                            <li><Link data-cursor="pointer" href="/html/blog-grid.html">Blog</Link></li>
                            <li><Link data-cursor="pointer" href="/html/services.html">Services</Link></li>
                            <li><Link data-cursor="pointer" href="/html/contact-us.html">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="link-section">
                    <div className="footer-title">
                        <Image src={Star} className="img-fluid" alt="star" />
                        Our service
                    </div>
                    <div className="footer-content">
                        <ul>
                            <li><Link data-cursor="pointer" href="/html/strategic_counselling.html">Strategic
                                    Counselling</Link></li>
                            <li><Link data-cursor="pointer" href="/html/ai-talk-assist.html">AI Talk Assist</Link></li>
                            <li><Link data-cursor="pointer" target="_blank"
                                    href="/html/training_and_education.html">Training &
                                    Education</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <h4>@2024 All the Copyright Reserved.</h4>
                <ul className="footer-links">
                    <li><Link href="/html/privacy.html">Privacy Policy </Link></li>
                    <li><Link href="/html/terms.html">Terms & Condition </Link></li>
                </ul>
            </div>
        </div>
    </footer>
        </>
    )
    
}