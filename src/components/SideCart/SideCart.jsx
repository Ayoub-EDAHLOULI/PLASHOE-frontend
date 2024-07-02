import "./SideCart.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCart,
  updateCart,
  removeFromCart,
} from "../../store/Actions/cartActions";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SideCart({ onClose }) {
  const cart = useSelector((state) => state.cart.cart || []);
  const categories = useSelector((state) => state.category.categories) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("Categories", categories);

  // State for cart increment and decrement
  const [cartQuantities, setCartQuantities] = useState({});

  // Fetch Cart and Categories
  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchCategories());
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

  // Get Category Name
  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  //Handle Increment
  const handleIncrement = (data) => {
    const currentQuantity = cartQuantities[data.itemId];

    if (currentQuantity < 10) {
      setCartQuantities((prevQuantities) => ({
        ...prevQuantities,
        [data.itemId]: Math.max(1, prevQuantities[data.itemId] + 1),
      }));

      dispatch(
        updateCart({
          id: data.itemId,
          productId: data.productId,
          quantity: cartQuantities[data.itemId] + 1,
        })
      )
        .then(() => {
          dispatch(fetchCart());
        })
        .catch((err) => console.log(err));
    }
  };

  //Handle Decrement
  const handleDecrement = (data) => {
    const currentQuantity = cartQuantities[data.itemId];

    if (currentQuantity > 1) {
      setCartQuantities((prevQuantities) => ({
        ...prevQuantities,
        [data.itemId]: Math.max(1, prevQuantities[data.itemId] - 1),
      }));

      dispatch(
        updateCart({
          id: data.itemId,
          productId: data.productId,
          quantity: cartQuantities[data.itemId] - 1,
        })
      )
        .then(() => {
          dispatch(fetchCart());
        })
        .catch((err) => console.log(err));
    }
  };

  //Handle Remove Item
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
      .then(() => {
        dispatch(fetchCart());
      })
      .catch((err) => console.log(err));
  };

  const handleCartClick = () => {
    onClose();
    navigate("/cart");
  };

  // Calculate Total Price
  const calculateTotalPrice = () => {
    return (Array.isArray(cart) ? cart : []).reduce((acc, item) => {
      return acc + item.product.price * cartQuantities[item.id];
    }, 0);
  };

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
            {cart && cart.length > 0 ? (
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
                              $
                              {(
                                item.product.price * cartQuantities[item.id]
                              ).toFixed(2)}
                            </span>
                            <span className="side-cart__product-category">
                              Category :{" "}
                              {getCategoryName(item.product.categoryId)}
                            </span>
                          </div>
                          <div className="right_side_add">
                            <button
                              className="side-cart__product-remove"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <i className="fa-solid fa-trash-can" />
                            </button>
                            <div className="side-cart__product-quantity">
                              <button
                                className="side-cart__product-quantity"
                                onClick={() =>
                                  handleDecrement({
                                    itemId: item.id,
                                    productId: item.product.id,
                                  })
                                }
                              >
                                -
                              </button>
                              <span>{cartQuantities[item.id]}</span>
                              <button
                                className="side-cart__product-quantity"
                                onClick={() =>
                                  handleIncrement({
                                    itemId: item.id,
                                    productId: item.product.id,
                                  })
                                }
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
              <span>${calculateTotalPrice().toFixed(2)}</span>
            </div>
            <div className="side-cart__buttons">
              <button
                className="side-cart__view-cart"
                onClick={handleCartClick}
              >
                View Cart
              </button>
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
