//Reducer/adressReducer.js

import {
  FETCH_ADDRESS_FAIL,
  FETCH_ADDRESS_REQUEST,
  FETCH_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAIL,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
} from "../Actions/addressActions";

const initialState = {
  adress: {},
  loading: false,
  error: null,
};

const adressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS_REQUEST:
    case CREATE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADDRESS_SUCCESS:
    case CREATE_ADDRESS_SUCCESS:
      return {
        ...state,
        adress: action.payload,
        loading: false,
      };
    case FETCH_ADDRESS_FAIL:
    case CREATE_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adressReducer;
