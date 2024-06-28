import PropTypes from "prop-types";
import "./ProductDescription.scss";
import { useState } from "react";

function ProductDescription({ description }) {
  //Display the clicked tab
  const [activeTab, setActiveTab] = useState("description");

  const handleClicked = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="product__description__review">
      <div className="product__tabs">
        <div
          className={`tab__button ${
            activeTab == "description" ? "active__tab" : ""
          }`}
          onClick={() => handleClicked("description")}
        >
          Description
        </div>
        <div
          className={`tab__button ${
            activeTab == "review" ? "active__tab" : ""
          }`}
          onClick={() => handleClicked("review")}
        >
          Review
        </div>
      </div>

      {
        //Display Product Description
        activeTab == "description" && (
          <div className="product__description">
            <p className="description__content">{description}</p>
          </div>
        )
      }

      {
        //Display Product Review
        activeTab == "review" && (
          <div className="product__review">
            <div className="review__content">
              <div className="rating__review">
                <h4>Your rating *</h4>
                <div className="rating__stars">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="review__textarea">
                <h4>Your review *</h4>
                <textarea placeholder="Write your review here..." rows="5" />
              </div>
            </div>
          </div>
        )
      }
    </main>
  );
}

// Define PropTypes
ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProductDescription;
