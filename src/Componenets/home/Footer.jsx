import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "@/images/4IRLogomain.png";
import Facebook from "../../../public/assets/svg/social/fb.svg";
import Youtube from "../../../public/assets/svg/youtube.svg";
import Linkedin from "../../../public/assets/svg/social/linkedin.svg";
import Star from "../../../public/assets/svg/star.svg";
import Headingh3 from "../typography/h3/Headingh3";
import Headingh4 from "../typography/h4/H4";

export default function Footer() {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="footer-main">
            <Link href="/" className="footer-logo">
              <Image src={MainLogo} id="logo-img" className="img-fluid" alt="Logo" priority />
            </Link>
            <Headingh3 title="SUBSCRIBE TO OUR NEWSLETTER" />
            <form>
              <div className="input-group">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mail" />
                <Link href="" data-cursor="pointer" className="btn-basic">Subscribe</Link>
              </div>
            </form>
            <ul className="social-links">
              <li><Link href="https://www.facebook.com/4IRinc" target="_blank"><Image src={Facebook} className="img-fluid" alt="facebook" /></Link></li>
              <li><Link href="https://www.linkedin.com/company/fourth-industrial-revolution-inc/" target="_blank"><Image src={Linkedin} className="img-fluid" alt="linkedin" /></Link></li>
              <li><Link href="https://www.youtube.com/@BarryKrevoy" target="_blank"><Image src={Youtube} className="img-fluid" alt="youtube" /></Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="link-section">
            <div className="footer-title" onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}>
              <Image src={Star} className="img-fluid" alt="star" priority />
              Quick Link
            </div>
            <div className={`footer-content ${isQuickLinksOpen ? 'open' : ''}`}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="link-section">
            <div className="footer-title" onClick={() => setServicesOpen(!isServicesOpen)}>
              <Image src={Star} className="img-fluid" alt="star" priority />
              Our service
            </div>
            <div className={`footer-content ${isServicesOpen ? 'open' : ''}`}>
              <ul>
                <li><Link href="/services/StrategicCounseling">Strategic Counselling</Link></li>
                <li><Link href="/services/AitalkAssist">AI Talk Assist</Link></li>
                <li><Link href="/services/TrainingEducation">Training & Education</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-copyright">
          <Headingh4 heading="©2024 4IR All the Copyright Reserved." />
          <ul className="footer-links">
            <li><Link href="/html/privacy.html">Privacy Policy </Link></li>
            <li><Link href="/html/terms.html">Terms & Condition </Link></li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-content {
          display: block; /* Show by default on larger screens */
        }
        @media (max-width: 768px) {
          .footer-content {
            display: none; /* Hide by default on small screens */
          }
          .footer-content.open {
            display: block; /* Show only if open on small screens */
          }
          .footer-title {
            cursor: pointer;
          }
        }
      `}</style>
    </footer>
  );
}
