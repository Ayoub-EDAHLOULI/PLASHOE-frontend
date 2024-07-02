import "./Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/Actions/cartActions";
import { useEffect } from "react";

function Checkout() {
  const cart = useSelector((state) => state.cart.cart || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // Calculate Total Price
  const calculateTotalPrice = () => {
    if (cart && cart.length > 0) {
      return cart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
    }
    return 0;
  };

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__header">
          <h1>Checkout</h1>
        </div>
        <div className="checkout__content">
          <div className="checkout__form">
            <h2>Billing details</h2>
            <form className="checkout__form_group">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First name"
                  className="checkout__input"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="checkout__input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="House number, street name"
                  className="checkout__input"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  className="checkout__input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  className="checkout__input"
                />
                <select className="checkout__input">
                  <option value="">Select State...</option>
                  <option value="Casablanca-Settat ">Casablanca-Settat </option>
                  <option value="Béni Mellal-Khénifra">
                    Béni Mellal-Khénifra
                  </option>
                  <option value="Drâa-Tafilalet Region">
                    Drâa-Tafilalet Region
                  </option>
                  <option value="Fès-Meknès">Fès-Meknès</option>
                  <option value="Marrakesh-Safi">Marrakesh-Safi</option>
                  <option value="Rabat-Salé-Kénitra">Rabat-Salé-Kénitra</option>
                  <option value="Souss-Massa">Souss-Massa</option>
                  <option value="Tanger-Tetouan-Al Hoceima">
                    Tanger-Tetouan-Al Hoceima
                  </option>
                  <option value="Dakhla-Oued Ed-Dahab">
                    Dakhla-Oued Ed-Dahab
                  </option>
                </select>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="checkout__input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="checkout__input checkout__input--full"
                />
              </div>
              <button className="checkout__button">
                <i className="fa-solid fa-bag-shopping" /> Place order
              </button>
            </form>
          </div>

          <div className="checkout__order">
            <div className="checkout__order-header">
              <h2>Your order</h2>
            </div>
            <div className="checkout__order-items">
              <table className="checkout__order-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                {cart && cart.length > 0 ? (
                  cart.map(
                    (item) =>
                      item.product && (
                        <tbody key={item.id}>
                          <tr>
                            <td>
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                              />
                            </td>
                            <td>{item.quantity}</td>
                            <td>
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </td>
                          </tr>
                        </tbody>
                      )
                  )
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan={3}>No items in your cart</td>
                    </tr>
                  </tbody>
                )}

                <tfoot>
                  <tr>
                    <td colSpan={2}>Total</td>
                    <td>${calculateTotalPrice().toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
