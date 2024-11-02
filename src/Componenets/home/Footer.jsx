import Image from "next/image"
import MainLogo from "@/images/main-logo.png"
import Facebook from "../../../public/assets/svg/social/fb.svg"
import Youtube from "../../../public/assets/svg/youtube.svg"
import Linkedin from "../../../public/assets/svg/social/Linkedin.svg"
import Star from "../../../public/assets/svg/star.svg"
export default function Footer() {
    return(
        <>
        <footer>
        <div class="container">
            <div class="footer-row">
                <div class="footer-main">
                    <a href="#" class="footer-logo"><Image src={MainLogo} id="logo-img"
                            class="img-fluid" alt="" /></a>
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <form>
                        <div class="input-group">
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Enter your mail" />
                            <a href="" data-cursor="pointer" class="btn-basic">Subscribe</a>
                        </div>
                    </form>
                    <ul class="social-links">
                        <li><a data-cursor="pointer" target="_blank" href="https://www.facebook.com/4IRinc"><Image
                                    src={Facebook} class="img-fluid" alt="facebook" /></a></li>
                        <li><a data-cursor="pointer" target="_blank"
                                href="https://www.linkedin.com/company/fourth-industrial-revolution-inc/"><Image
                                    src={Linkedin} class="img-fluid" alt="linkedin" /></a></li>
                        <li><a data-cursor="pointer" target="_blank" href="https://www.youtube.com/@BarryKrevoy"><Image
                                    src={Youtube} class="img-fluid" alt="youtube" /></a></li>
                    </ul>
                </div>
                <div class="link-section">
                    <div class="footer-title">
                        <Image src={Star} class="img-fluid" alt="star" />
                        Quick Link
                    </div>
                    <div class="footer-content">
                        <ul>
                            <li><a data-cursor="pointer" href="/home.html">Home</a></li>
                            <li><a data-cursor="pointer" href="/html/blog-grid.html">Blog</a></li>
                            <li><a data-cursor="pointer" href="/html/services.html">Services</a></li>
                            <li><a data-cursor="pointer" href="/html/contact-us.html">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="link-section">
                    <div class="footer-title">
                        <Image src={Star} class="img-fluid" alt="star" />
                        Our service
                    </div>
                    <div class="footer-content">
                        <ul>
                            <li><a data-cursor="pointer" href="/html/strategic_counselling.html">Strategic
                                    Counselling</a></li>
                            <li><a data-cursor="pointer" href="/html/ai-talk-assist.html">AI Talk Assist</a></li>
                            <li><a data-cursor="pointer" target="_blank"
                                    href="/html/training_and_education.html">Training &
                                    Education</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <h4>@2024 All the Copyright Reserved.</h4>
                <ul class="footer-links">
                    <li><a href="/html/privacy.html">Privacy Policy </a></li>
                    <li><a href="/html/terms.html">Terms & Condition </a></li>
                </ul>
            </div>
        </div>
    </footer>
        </>
    )
    
}