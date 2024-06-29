export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAIL = "FETCH_CART_FAIL";
export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";
export const UPDATE_CART_REQUEST = "UPDATE_CART_REQUEST";
export const UPDATE_CART_SUCCESS = "UPDATE_CART_SUCCESS";
export const UPDATE_CART_FAIL = "UPDATE_CART_FAIL";
export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_FAIL = "REMOVE_FROM_CART_FAIL";

export const CLOSE_CART = "CLOSE_CART";

const apiURL = "http://localhost:3000/api/v1";

// Create Cart
export const createCart = (cart) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: ADD_TO_CART_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
      }

      const response = await fetch(`${apiURL}/card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cart),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: ADD_TO_CART_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: ADD_TO_CART_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

// Fetch Cart
export const fetchCart = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CART_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: FETCH_CART_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
      }

      const response = await fetch(`${apiURL}/card`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: FETCH_CART_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: FETCH_CART_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: FETCH_CART_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

// Update Cart
export const updateCart = (cart) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST });

    console.log("Cart", cart);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: UPDATE_CART_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
      }

      const response = await fetch(`${apiURL}/card/${cart.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cart),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: UPDATE_CART_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: UPDATE_CART_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: UPDATE_CART_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
