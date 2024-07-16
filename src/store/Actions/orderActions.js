export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";
export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAIL = "GET_ORDERS_FAIL";

const apiURL = "http://localhost:3000/api/v1";

export const createOrder = (order) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: "Token not found" });
        return Promise.reject("Token not found");
      }

      const response = await fetch(`${apiURL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: CREATE_ORDER_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: CREATE_ORDER_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

//get all orders
export const fetchOrders = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: GET_ORDERS_FAIL, payload: "Token not found" });
        return Promise.reject("Token not found");
      }

      const response = await fetch(`${apiURL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: GET_ORDERS_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: GET_ORDERS_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: GET_ORDERS_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
