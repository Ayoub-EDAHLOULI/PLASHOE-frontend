import "./SideCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/Actions/cartActions";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

function SideCart({ onClose }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // State for cart increment and decrement
  const [cartQuantities, setCartQuantities] = useState({});

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleCloseButton = () => {
    onClose();
  };

  useEffect(() => {
    if (cart.length > 0) {
      const initialQuantities = cart.reduce((acc, item) => {
        acc[item.id] = item.quantity || 1;
        return acc;
      }, {});
      setCartQuantities(initialQuantities);
    }
  }, [cart]);
  const handleIncrement = (id) => {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] + 1),
    }));
  };

  const handleDecrement = (id) => {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] - 1),
    }));
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
          <div className="side-cart__items">
            {cart.length > 0 ? (
              cart.map(
                (item) =>
                  item.product && (
                    <div className="side-cart__item" key={item.id}>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="side-cart__product-image"
                      />
                      <div className="side-cart__product-info">
                        <h4>{item.product.name}</h4>
                        <div className="side-cart__product-meta">
                          <div className="left_side">
                            <span className="side-cart__product-price">
                              ${item.product.price}
                            </span>
                            <span className="side-cart__product-category">
                              Category : {item.product.categoryId}
                            </span>
                          </div>
                          <div className="right_side_add">
                            <button className="side-cart__product-remove">
                              <i className="fa-solid fa-trash-can" />
                            </button>
                            <div className="side-cart__product-quantity">
                              <button
                                className="side-cart__product-quantity"
                                onClick={() => handleDecrement(item.id)}
                              >
                                -
                              </button>
                              <span>{cartQuantities[item.id]}</span>
                              <button
                                className="side-cart__product-quantity"
                                onClick={() => handleIncrement(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )
            ) : (
              <h4>No items in cart</h4>
            )}
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
