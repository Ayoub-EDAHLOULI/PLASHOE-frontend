//Reducer/orderReducer.js

import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
} from "../Actions/orderActions";

const initialState = {
  order: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case CREATE_ORDER_SUCCESS:
    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case CREATE_ORDER_FAIL:
    case GET_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
