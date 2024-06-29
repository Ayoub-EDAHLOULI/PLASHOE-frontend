//Reducer/cartReducer.js

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAIL,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAIL,
} from "../Actions/cartActions";

const initialState = {
  cart: {},
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
    case FETCH_CART_REQUEST:
    case UPDATE_CART_REQUEST:
    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_CART_SUCCESS:
    case FETCH_CART_SUCCESS:
    case UPDATE_CART_SUCCESS:
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case ADD_TO_CART_FAIL:
    case FETCH_CART_FAIL:
    case UPDATE_CART_FAIL:
    case REMOVE_FROM_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
