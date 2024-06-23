import "./AboutUs.scss";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <div className="about-us__left">
          <div className="left-side">
            <div className="ImageOne"></div>
            <div className="ImageTwo"></div>
          </div>
          <div className="right-side">
            <div className="ImageThree"></div>
          </div>
        </div>
        <div className="about-us__right">
          <h5>ABOUT US</h5>
          <div className="about-us__right__title">
            <h1>We Provide hight</h1>
            <h1>Quality Products</h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex magnam
            cum, maxime nobis necessitatibus ad velit tempora eaque illo nisi,
            quidem aliquid officia, fugiat doloribus aliquam alias nostrum a
            deleniti.0
          </p>
          <Link to="/about">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
