import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footerOne">
            <h2>Shop</h2>
            <ul>
              <li>
                <Link to="/">Man</Link>
              </li>
              <li>
                <Link to="/">Woman</Link>
              </li>
              <li>
                <Link to="/">Kids</Link>
              </li>
            </ul>
          </div>
          <div className="footerTwo">
            <h2>Connect</h2>
            <ul>
              <li>
                <Link to="/">Linkdin</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="footerThree">
            <h2>Need Help?</h2>
            <ul>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Return Policy</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footerFour">
            <h2>Stay In Touch</h2>
            <div className="email">
              <input type="email" placeholder="Enter your email " />
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
