import "./Navbar.scss";

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
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </>
  );
}
