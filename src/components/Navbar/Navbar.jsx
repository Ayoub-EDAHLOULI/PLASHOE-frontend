import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch Logout Action
    dispatch({ type: "LOGOUT" });

    // Redirect to Home Page
    navigate("/");
  };

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
                <Link to="/">Home</Link>
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="navbar__icons">
            <i className="fas fa-search" />
            {localStorage.getItem("token") ? (
              <Link to="/" className="logout-container">
                <i
                  className="fa-solid fa-arrow-right-from-bracket logout"
                  onClick={handleLogout}
                />
                <span className="logout-text">Logout</span>
              </Link>
            ) : (
              <Link to="/login">
                <i className="fas fa-user" />
              </Link>
            )}
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
      </div>
    </>
  );
}
