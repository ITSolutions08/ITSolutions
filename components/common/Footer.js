import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="Solutions" caption="IT" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <a href="tel:+9197661661323">
                <h3>+91 97661661323</h3>
              </a>
              <br />
              {/* <button className='button-primary'>Request for quote</button> */}
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/">About </Link>
              </li>
              <li>
                <Link href="/">Showcase</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Desktop Repair</Link>
              </li>
              <li>
                <Link href="/">Laptop Repair</Link>
              </li>
              <li>
                <Link href="/">Printer Refilling & Repair</Link>
              </li>
              <li>
                <Link href="/">CCTV Installation & Repair</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link
                    href="https://www.facebook.com/share/8hADXDb7kEngjckY/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ittech_studio?utm_source=qr&igsh=bmZ6OGtjeXducWFp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/@ittech-studio?si=XdhG1cquSav3mSdN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillYoutube size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2024 HSS. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
