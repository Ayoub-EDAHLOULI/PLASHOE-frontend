export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const apiURL = "http://localhost:3000/api/v1";

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const res = await fetch(`${apiURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (data.success) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data.token,
      });
      return Promise.resolve(data.message);
    } else {
      dispatch({
        type: REGISTER_FAIL,
        payload: data.message,
      });
      return Promise.reject(data.message);
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
    return Promise.reject(error.response.data.message);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const res = await fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.data.token,
    });
    return Promise.resolve(data.message);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
    return Promise.reject(error.response.data.message);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
