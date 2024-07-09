//Reducer/userInfoReducer.js

import {
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAIL,
  CREATE_USER_INFO_REQUEST,
  CREATE_USER_INFO_SUCCESS,
  CREATE_USER_INFO_FAIL,
} from "../Actions/userInfoActions";

const initialState = {
  userInfo: {},
  loading: false,
  error: null,
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_REQUEST:
    case CREATE_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USER_INFO_SUCCESS:
    case CREATE_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case FETCH_USER_INFO_FAIL:
    case CREATE_USER_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
