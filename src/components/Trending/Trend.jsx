import "./Trend.scss";
import { Link } from "react-router-dom";

function Trend() {
  return (
    <div className="trend">
      <div className="trend_container">
        <div className="trend_top_side">
          <div className="trend_title">
            <h2>Trending Now</h2>
          </div>
          <div className="all_products">
            <Link to="/collection">All Products</Link>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="trend_bottom_side">
          <div className="card_one">
            <div className="card_one_title">
              <h3>Nike Air Max 270</h3>
            </div>
          </div>
          <div className="card_two">
            <div className="card_one_title">
              <h3>Nike Air Force 1 Shadow</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trend;
