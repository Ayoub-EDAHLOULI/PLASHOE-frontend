import "./Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/Actions/cartActions";
import { useEffect, useState, useContext } from "react";
import { createUserInfo } from "../../store/Actions/userInfoActions";
import { createAddress } from "../../store/Actions/addressActions";
import { createPayment } from "../../store/Actions/paymentActions";
import { ToastContext } from "../../context/ToastContext";
import { ToastContainer } from "react-toastify";

function Checkout() {
  const cart = useSelector((state) => state.cart.cart || []);
  const dispatch = useDispatch();
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  console.log("Cart", cart);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  // Handle Form Change
  const handleFormChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculate Total Price
  const calculateTotalPrice = () => {
    if (cart && cart.length > 0) {
      return cart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
    }
    return 0;
  };

  // Submit Order
  const submitOrder = (e) => {
    e.preventDefault();

    // Check if cart is empty
    if (!cart || cart.length === 0) {
      console.log("Cart is empty");
      return;
    }

    // Check if form is valid
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip ||
      !formData.phone
    ) {
      addToast("Please fill in all fields", "error");
      return;
    }

    // Create Address
    const addressData = {
      address: formData.address,
      apartment: formData.apartment,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
    };

    dispatch(createAddress(addressData))
      .then(() => {
        console.log("Address created successfully");
      })
      .catch((err) => {
        console.log("Error creating address", err);
      });

    // Create User Info
    const userInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
    };

    dispatch(createUserInfo(userInfo))
      .then(() => {
        console.log("User Info created successfully");
      })
      .catch((err) => {
        console.log("Error creating user info", err);
      });
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="checkout__input"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="House number, street name"
                  className="checkout__input"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  className="checkout__input"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  className="checkout__input"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                />
                <select
                  className="checkout__input"
                  name="state"
                  value={formData.state}
                  onChange={handleFormChange}
                >
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
                  name="zip"
                  value={formData.zip}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="checkout__input checkout__input--full"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </div>
              <button className="checkout__button" onClick={submitOrder}>
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

      <ToastContainer />
    </div>
  );
}

export default Checkout;
