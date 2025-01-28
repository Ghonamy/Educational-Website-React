import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are Hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Buisness Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="col">
            <h2>Resourses</h2>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <p className="copy-right">
          &copy; 2025 | All Rights Reserved Made By{" "}
          <span>Mohamed Elkashef</span>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
