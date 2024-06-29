import "./SideCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/Actions/cartActions";
import { useEffect } from "react";
import Product1 from "../../assets/Products/Men/product1.jpg";

import PropTypes from "prop-types";

function SideCart({ onClose }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleCloseButton = () => {
    onClose();
  };

  console.log("Cart", cart);

  return (
    <div className="side-cart">
      <div className="side-cart__container">
        <div className="side-cart__header">
          <h3>Cart</h3>
          <i
            className="fa-solid fa-xmark close"
            onClick={handleCloseButton}
          ></i>
        </div>
        <div className="side-cart__content">
          {/* {cart?.product?.map((product) => (
            <div key={product.id} className="side-cart__product">
              <img src={product.image} alt={product.name} />
              <div className="side-cart__product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="side-cart__footer">
          <h4>Total: {cart?.totalPrice}</h4>
          <button>Checkout</button>
        </div> */}

          <div className="side-cart__items">
            <div className="side-cart__item">
              <img
                src={Product1}
                alt="Product Name"
                className="side-cart__product-image"
              />
              <div className="side-cart__product-info">
                <h4>Product Name</h4>
                <div className="side-cart__product-meta">
                  <div className="left_side">
                    <span className="side-cart__product-price">$548.00</span>
                    <span className="side-cart__product-category">
                      Category : Men
                    </span>
                  </div>
                  <div className="right_side_add">
                    <button className="side-cart__product-remove">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                    <div className="side-cart__product-quantity">
                      <button className="side-cart__product-quantity">-</button>
                      <span>1</span>
                      <button className="side-cart__product-quantity">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="side-cart__item">
              <img
                src={Product1}
                alt="Product Name"
                className="side-cart__product-image"
              />
              <div className="side-cart__product-info">
                <h4>Product Name</h4>
                <div className="side-cart__product-meta">
                  <div className="left_side">
                    <span className="side-cart__product-price">$548.00</span>
                    <span className="side-cart__product-category">
                      Category : Men
                    </span>
                  </div>
                  <div className="right_side_add">
                    <button className="side-cart__product-remove">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                    <div className="side-cart__product-quantity">
                      <button className="side-cart__product-quantity">-</button>
                      <span>1</span>
                      <button className="side-cart__product-quantity">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="side-cart__item">
              <img
                src={Product1}
                alt="Product Name"
                className="side-cart__product-image"
              />
              <div className="side-cart__product-info">
                <h4>Product Name</h4>
                <div className="side-cart__product-meta">
                  <div className="left_side">
                    <span className="side-cart__product-price">$548.00</span>
                    <span className="side-cart__product-category">
                      Category : Men
                    </span>
                  </div>
                  <div className="right_side_add">
                    <button className="side-cart__product-remove">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                    <div className="side-cart__product-quantity">
                      <button className="side-cart__product-quantity">-</button>
                      <span>1</span>
                      <button className="side-cart__product-quantity">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="side-cart__item">
              <img
                src={Product1}
                alt="Product Name"
                className="side-cart__product-image"
              />
              <div className="side-cart__product-info">
                <h4>Product Name</h4>
                <div className="side-cart__product-meta">
                  <div className="left_side">
                    <span className="side-cart__product-price">$548.00</span>
                    <span className="side-cart__product-category">
                      Category : Men
                    </span>
                  </div>
                  <div className="right_side_add">
                    <button className="side-cart__product-remove">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                    <div className="side-cart__product-quantity">
                      <button className="side-cart__product-quantity">-</button>
                      <span>1</span>
                      <button className="side-cart__product-quantity">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="side-cart__footer">
            <div className="side-cart__total">
              <h4>Total :</h4>
              <span>$548.00</span>
            </div>
            <div className="side-cart__buttons">
              <button className="side-cart__view-cart">View Cart</button>
              <button className="side-cart__checkout-button">
                <i className="fa-solid fa-shopping-bag" />
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SideCart.propTypes = {
  onClose: PropTypes.func,
};

export default SideCart;
