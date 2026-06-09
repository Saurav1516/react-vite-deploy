import "../styles/footer.css";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="wmt-footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-col">
          <h4 className="footer-title">WMT Films</h4>
          <p>
            A creative production house specializing in corporate films,
            advertising films, brand storytelling and digital content.
          </p>

          {/* SOCIAL */}
          <div className="footer-social">
            <a href="#" target="_blank">
              <FaYoutube />
            </a>
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <p>info@wmtfilms.com</p>
          <p>+91 99994 27033</p>
          <p>Noida, Sector-16A, Film City</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WMT Films Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
