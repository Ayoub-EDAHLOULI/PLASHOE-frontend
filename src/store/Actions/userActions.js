//Fetch User Actions
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

//Create User Actions
export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

//Update User Actions
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

//Delete User Actions
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

import { jwtDecode } from "jwt-decode";

const apiURL = "http://localhost:3000/api/v1";

//Check if user is logged in
export const checkAuthentication = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("token");
        return;
      }
      dispatch({ type: FETCH_USER_REQUEST });

      const response = await fetch(`${apiURL}/user/${decodedToken.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch({ type: FETCH_USER_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: FETCH_USER_FAIL, payload: data.message });
      }
    } catch (err) {
      dispatch({ type: FETCH_USER_FAIL, payload: err.message });
    }
  };
};
