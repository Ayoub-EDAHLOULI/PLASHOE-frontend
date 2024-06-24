import "./ProductDescription.scss";
import { useState } from "react";

function ProductDescription() {
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
            <p className="description__content">
              Auctor eros suspendisse tellus venenatis sodales purus non
              pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar
              odio feugiat consectetur egestas magna pharetra cursus risus,
              lectus enim eget eu et lobortis faucibus. Eget odio justo ut
              scelerisque purus non aliquam adipiscing amet condimentum ligula
              diam erat sodales pharetra accumsan pellentesque at sem at eget ac
              hendrerit odio enim felis sit augue lorem egestas dictum
              vestibulum a etiam nisi, elit augue volutpat porta scelerisque
              nullam at leo faucibus cursus metus. Viverra nunc iaculis id sed
              diam nam quam id sapien pellentesque quam sed eu augue id ac
              tempus aliquam facilisis vivamus eget nisi id.
            </p>
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

export default ProductDescription;
