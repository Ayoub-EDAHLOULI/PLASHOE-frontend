//Fetch Products Actions
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

//Create Product Actions
export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAIL = "CREATE_PRODUCT_FAIL";

//Update Product Actions
export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL";

//Delete Product Actions
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";

const apiURL = "http://localhost:3000/api/v1";

//Create Product
export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_PRODUCT_FAIL, payload: "Unauthorized" });
        return;
      }
      const response = await fetch(`${apiURL}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: CREATE_PRODUCT_FAIL, payload: data.message });
      }
    } catch (err) {
      dispatch({ type: CREATE_PRODUCT_FAIL, payload: err.message });
    }
  };
};