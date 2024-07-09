export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_FAIL = "FETCH_USER_INFO_FAIL";

export const CREATE_USER_INFO_REQUEST = "CREATE_USER_INFO_REQUEST";
export const CREATE_USER_INFO_SUCCESS = "CREATE_USER_INFO_SUCCESS";
export const CREATE_USER_INFO_FAIL = "CREATE_USER_INFO_FAIL";

const apiURL = "http://localhost:3000/api/v1";

export const createUserInfo = (userInfo) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_INFO_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_USER_INFO_FAIL, payload: "Token not found" });
        return Promise.reject("Token not found");
      }

      const response = await fetch(`${apiURL}/userInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CREATE_USER_INFO_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: CREATE_USER_INFO_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: CREATE_USER_INFO_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
