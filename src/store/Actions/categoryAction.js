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

//Create Category
export const createCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_CATEGORY_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
      }

      const response = await fetch(`${apiURL}/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(category),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: CREATE_CATEGORY_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: CREATE_CATEGORY_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

// Update Category
export const updateCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: UPDATE_CATEGORY_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
      }

      const response = await fetch(`${apiURL}/category/${category.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(category),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: UPDATE_CATEGORY_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: UPDATE_CATEGORY_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
