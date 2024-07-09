//Reducer//paymentReducer.js

import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAIL,
} from "../Actions/paymentActions";

const initialState = {
  loading: false,
  payment: null,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
      return { ...state, loading: true };
    case CREATE_PAYMENT_SUCCESS:
      return { ...state, loading: false, payment: action.payload, error: null };
    case CREATE_PAYMENT_FAIL:
      return { ...state, loading: false, payment: null, error: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
