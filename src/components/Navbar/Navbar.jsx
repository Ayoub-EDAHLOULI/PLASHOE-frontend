import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <>
      <div className="navbar">
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
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
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
            <i className="fas fa-shopping-cart" />
            {isAuthenticated && user && user.role === "ADMIN" ? (
              <Link to="/dashboard">
                <i className="fas fa-user-cog" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
