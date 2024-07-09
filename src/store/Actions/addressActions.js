export const FETCH_ADDRESS_REQUEST = "FETCH_ADDRESS_REQUEST";
export const FETCH_ADDRESS_SUCCESS = "FETCH_ADDRESS_SUCCESS";
export const FETCH_ADDRESS_FAIL = "FETCH_ADDRESS_FAIL";

export const CREATE_ADDRESS_REQUEST = "CREATE_ADDRESS_REQUEST";
export const CREATE_ADDRESS_SUCCESS = "CREATE_ADDRESS_SUCCESS";
export const CREATE_ADDRESS_FAIL = "CREATE_ADDRESS_FAIL";

const apiURL = "http://localhost:3000/api/v1";

export const createAddress = (address) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ADDRESS_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_ADDRESS_FAIL, payload: "Token not found" });
        return Promise.reject("Token not found");
      }

      const response = await fetch(`${apiURL}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(address),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CREATE_ADDRESS_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: CREATE_ADDRESS_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: CREATE_ADDRESS_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
