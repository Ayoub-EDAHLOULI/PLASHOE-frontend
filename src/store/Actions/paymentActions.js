export const CREATE_PAYMENT_REQUEST = "CREATE_PAYMENT_REQUEST";
export const CREATE_PAYMENT_SUCCESS = "CREATE_PAYMENT_SUCCESS";
export const CREATE_PAYMENT_FAIL = "CREATE_PAYMENT_FAIL";

const apiURL = "http://localhost:3000/api/v1";

export const createPayment = (payment) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_PAYMENT_FAIL, payload: "Token not found" });
        return Promise.reject("Token not found");
      }

      const response = await fetch(`${apiURL}/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payment),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: CREATE_PAYMENT_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: CREATE_PAYMENT_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
