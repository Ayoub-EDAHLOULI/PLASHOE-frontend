import "./Rating.scss";

function Rating() {
  return (
    <div className="rating">
      <div className="rating__container">
        <div className="rating__container__title">
          <h1>Our Customers speak for us</h1>
        </div>
        <div className="rating__container__content">
          <div className="ratingOne">
            <div className="content">
              <div className="content__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="content__text">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.”
                </p>
              </div>
              <div className="content__info">
                <div className="imageOne"></div>
                <h1>Warren Buffett</h1>
              </div>
            </div>
          </div>
          <div className="ratingTwo">
            <div className="content">
              <div className="content__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="content__text">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.”
                </p>
              </div>
              <div className="content__info">
                <div className="imageTwo"></div>
                <h1>Elon Musk</h1>
              </div>
            </div>
          </div>
          <div className="ratingThree">
            <div className="content">
              <div className="content__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="content__text">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.”
                </p>
              </div>
              <div className="content__info">
                <div className="imageThree"></div>
                <h1>Michael Jordan</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
