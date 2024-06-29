//Reducer/cartReducer.js

import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAIL,
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
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_CART_SUCCESS:
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case ADD_TO_CART_FAIL:
    case FETCH_CART_FAIL:
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
