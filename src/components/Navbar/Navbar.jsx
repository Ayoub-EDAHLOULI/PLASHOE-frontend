import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import ScrollToTop from "../../../utils/ScrollToTop";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Toggle state for cart
  const [isCartVisible, setIsCartVisible] = useState(false);

  const user = useSelector((state) => state.user.user);
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!user && localStorage.getItem("user")) {
      dispatch({
        type: "FETCH_USER_SUCCESS",
        payload: JSON.parse(localStorage.getItem("user")),
      });
    }
  }, [user, dispatch]);

  const handleLogout = () => {
    // Dispatch Logout Action
    dispatch({ type: "LOGOUT" });

    // Redirect to Home Page
    navigate("/");
  };

  const handleToggleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCartVisible((prevState) => !prevState);
  };

  // Close Cart
  const handleCloseCart = () => {
    setIsCartVisible(false);
  };
  useEffect(() => {
    isCartVisible ? <SideCart /> : null;
  }, [isCartVisible]);

  return (
    <div className="navbar">
      <ScrollToTop />

      <div className="navbar_container">
        <div className="navbar_logo">
          <Link to="/">
            <h2>PLASHOE</h2>
          </Link>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <a href="/">Lookbrok</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
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
          <i className="fas fa-shopping-cart" onClick={handleToggleCart} />
          {isAuthenticated && user && user.role === "ADMIN" ? (
            <Link to="/dashboard?tab=dashboard">
              <i className="fas fa-user-cog" />
            </Link>
          ) : null}
        </div>
      </div>

      {isCartVisible && <SideCart onClose={handleCloseCart} />}
    </div>
  );
}
