// Reducers/authReducer.js

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../Actions/authActions";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
