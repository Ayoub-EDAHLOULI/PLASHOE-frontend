import "./DisplayProduct.scss";
import Product1 from "../../assets/Products/Men/product1.jpg";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

function DisplayProduct() {
  return (
    <div className="products">
      <div className="products__container">
        <div className="product__content">
          <div className="product__image">
            <img src={Product1} alt="Product1" />
          </div>
          <div className="product__info">
            <div className="product__tags">
              <span>Sneaker & </span>
              <span>Women</span>
            </div>
            <h2 className="product__name">Nike Air Max 270 React</h2>
            <div className="product__price__rate">
              <span className="product__price">$150</span>
              <div className="product__rate">
                <span className="product__rate">4.5</span>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <p className="product__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultricies, turpis nec tincidunt interdum, elit mi ultrices odio,
              eget tempor sapien nisl ut nunc.
            </p>
            <div className="product__quantity">
              <span className="quantity__title">Quantity:</span>
              <div className="quantity__buttons">
                <button className="quantity__btn">-</button>
                <span className="quantity__number">1</span>
                <button className="quantity__btn">+</button>
              </div>
            </div>
            <div className="in__stock">In Stock</div>
            <div className="cards__buttons">
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
            <div className="product__shipping">
              <div className="top__shipping">
                <i className="fa-solid fa-truck-fast"></i>
                <span>Fast Shipping</span>
              </div>
              <div className="bottom__shipping">
                <span>
                  Place your order before 12:00pm and receive it by tomorrow
                </span>
              </div>
            </div>
          </div>
        </div>

        <ProductDescription />
      </div>
    </div>
  );
}

export default DisplayProduct;
