//Fetch Categories Actions
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL";

//Create Category Actions
export const CREATE_CATEGORY_REQUEST = "CREATE_CATEGORY_REQUEST";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAIL = "CREATE_CATEGORY_FAIL";

//Update Category Actions
export const UPDATE_CATEGORY_REQUEST = "UPDATE_CATEGORY_REQUEST";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_FAIL = "UPDATE_CATEGORY_FAIL";

//Delete Category Actions
export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAIL = "DELETE_CATEGORY_FAIL";

const apiURL = "http://localhost:3000/api/v1";

//Fetch Categories
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    try {
      const response = await fetch(`${apiURL}/categories`);
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: FETCH_CATEGORIES_FAIL, payload: data.message });
      }
    } catch (err) {
      dispatch({ type: FETCH_CATEGORIES_FAIL, payload: err.message });
    }
  };
};
