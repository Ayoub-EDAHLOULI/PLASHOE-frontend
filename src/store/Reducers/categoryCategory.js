//Reducer/categoryReducer.js

import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
} from "../Actions/categoryAction";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
    case CREATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORIES_SUCCESS:
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case FETCH_CATEGORIES_FAIL:
    case CREATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
