import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo">
            <h2>PLASHOE</h2>
          </div>
          <div className="navbar__menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">Collection</a>
              </li>
              <li>
                <a href="/">Lookbrok</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="navbar__icons">
            <i className="fas fa-search" />
            <Link to="/login">
              <i className="fas fa-user" />
            </Link>
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
      </div>
    </>
  );
}
