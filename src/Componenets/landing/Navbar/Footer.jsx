import React ,{useRef} from 'react'
import SiteLogo from '../SiteLogo'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3of8qbv', 'template_k21177h', form.current, {
        publicKey: '_f0VkvxBETP7w2sgt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
      <div className='Footer-wrapper text-white'>
        <div className="maindiv">
          <div className="container">
            <div className="row footer-1strow">
              <div className="col-lg-4 col-md-12 col-sm-12">

                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <figure><SiteLogo width="150px" height="fit-content" /></figure>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <h5 className='footer-h5 custom-color'>Empower Your Business with AI</h5>
                    <p>AI Talk Assist is more than just a tool, it’s the future of customer engagement</p>
                    <div className="footer-socials-links d-flex justify-content-between">
                      <figure><FaFacebook size={40} color='#316FF6' /></figure>
                      <figure><FaLinkedin size={40} color='#0077B5' /></figure>
                      <figure><FaYoutube size={40} color='red' /></figure>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ textAlign: "center" }}>
                <h5 className='footer-h5'>Resources</h5>

                <ul className='list-unstyled footer-ul'>
                  <li><p>Our Knowledge base</p></li>
                  <li><p>AI Talk Assist Features</p></li>
                  <li><p>Try AI Talk Assist</p></li>
                  <li><p>Strategic Counselling</p></li>
                  <li><p>Contact AI Talk Assist Team</p></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <h5 className='footer-h5'>Subscribe for update</h5>
                <form action="" ref={form} onSubmit={sendEmail}>
                  <input type="text" className="form-control input" placeholder="Name" name="user_name"/>
                  <input type="number" className="form-control input" placeholder="Phone Number" name="user_number"/>
                  <input type="email" className="form-control input" placeholder="Email Address" name="user_email"/>

                  <button type="submit" value="Send" className='btn-1 footer-btn'>Subscribe</button>
                </form>
              </div>
            </div>

            <div className="row footer-copyright ">
              <div className="col-lg-12 d-flex justify-content-between pt-4 footer-copyright-body">
                <div className="mb-3">
                  4IR © 2024 All the Copyright Reserved.
                </div>
                <div className="">
                  Privacy Policy | Terms & Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer