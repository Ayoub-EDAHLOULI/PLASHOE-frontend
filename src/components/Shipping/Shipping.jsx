import "./Shipping.scss";

function Shipping() {
  return (
    <div className="about__shipping">
      <div className="about__shipping__container">
        <div className="about__shipping__content">
          <div className="content__item">
            <i className="fa-solid fa-location-dot"></i>
            <div className="content__item__text">
              <h2>Designed in NYC</h2>
              <p>Products designed and developed in New York City.</p>
            </div>
          </div>
          <div className="content__item">
            <i className="fa-solid fa-truck"></i>
            <div className="content__item__text">
              <h2>Worldwide Shipping</h2>
              <p>Shipping available worldwide.</p>
            </div>
          </div>
          <div className="content__item">
            <i className="fa-solid fa-credit-card"></i>
            <div className="content__item__text">
              <h2>Secure Payment</h2>
              <p>Secure online payment.</p>
            </div>
          </div>
          <div className="content__item">
            <i className="fa-solid fa-award"></i>
            <div className="content__item__text">
              <h2>Quality Guarantee</h2>
              <p>Quality products guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
