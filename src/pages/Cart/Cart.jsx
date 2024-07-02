import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  updateCart,
  removeFromCart,
} from "../../store/Actions/cartActions";
import { useEffect, useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart.cart || []);
  const dispatch = useDispatch();

  // State for cart increment and decrement
  const [cartQuantities, setCartQuantities] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  console.log("cart", cart);

  // Calculate Subtotal
  const calculateSubtotal = (price, quantity) => [
    (price * quantity).toFixed(2),
  ];

  // Calculate Total
  useEffect(() => {
    const total = (Array.isArray(cart) ? cart : []).reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [cart]);

  // Set initial quantities
  useEffect(() => {
    if (cart.length > 0) {
      const initialQuantities = cart.reduce((acc, item) => {
        acc[item.id] = item.quantity || 1;
        return acc;
      }, {});
      setCartQuantities(initialQuantities);
    }
  }, [cart]);

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

  return (
    <div className="cart__items">
      <div className="cart__container">
        <h1 className="cart__title">Cart</h1>
        <div className="cart__content">
          <div className="cart__items">
            <table className="cart__table">
              <thead className="cart__table-header">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="cart__table-body">
                {cart && cart.length > 0 ? (
                  cart.map(
                    (item) =>
                      item.product && (
                        <tr key={item.id}>
                          <td>
                            <div className="cart__item">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                              />
                              <p>{item.product.name}</p>
                            </div>
                          </td>
                          <td>${item.product.price.toFixed(2)}</td>
                          <td>
                            <div className="cart__quantity">
                              <button
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
                          </td>
                          <td>
                            $
                            {calculateSubtotal(
                              item.product.price,
                              item.quantity
                            )}
                          </td>
                          <td>
                            <i
                              className="fa-solid fa-xmark"
                              onClick={() => handleRemoveItem(item.id)}
                            ></i>
                          </td>
                        </tr>
                      )
                  )
                ) : (
                  <tr>
                    <td colSpan="5">No items in the cart</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="cart__total">
            <div className="cart__total__content">
              <div className="cart__total__item__title">
                <h3>Cart Totals</h3>
              </div>
              <div className="cart__total__item">
                <span>Total :</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="cart__total__btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
