import { Title, TitleSm } from "@/components/common/Title";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";

import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i92kbme", "template_9zxc2yy", form.current, {
        publicKey: "yclGYc31Zq3pkIoEB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Request Service" /> <br />
            <br />
            <Title title="Let's Get Started!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <a href="tel:+9197661661323">
                    <h3>+91 97661661323</h3>
                  </a>
                  <span>Call: Mon - Sat 9:00 AM - 9:00 PM</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Nagpur</h3>
                  <span>
                    53, Shree Mahalaxmi Nagar, New Narsala Road, Nagpur - 440034
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <a href="mailto:solutionhub005@gmail.com">
                    <h3>solutionhub005@gmail.com</h3>
                  </a>

                  <span>Connect Anytime!</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <a
                    href="https://www.facebook.com/share/8hADXDb7kEngjckY/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook size={25} />
                  </a>
                </li>
                <li className="icon">
                  <a
                    href="https://www.instagram.com/ittech_studio?utm_source=qr&igsh=bmZ6OGtjeXducWFp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram size={25} />
                  </a>
                </li>
                <li className="icon">
                  <a
                    href="https://youtube.com/@ittech-studio?si=XdhG1cquSav3mSdN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsYoutube size={25} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Need any services? Fill out the form below to request service.
              </p>

              <form ref={form} onSubmit={sendEmail}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Name*</span>
                    <input
                      name="from_name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="inputs">
                    <span>Email Address*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone_number"
                    />
                  </div>
                  <div className="inputs">
                    <span>Service Needed*</span>
                    <input
                      type="text"
                      name="req_service"
                      placeholder="Enter the service you need"
                      required
                    />
                  </div>
                </div>
                <div className="inputs">
                  <span>Tell Us More About Service*</span>
                  <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Briefly describe your requirements"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button-primary"
                  onSubmit={sendEmail}
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
