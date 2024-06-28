//Fetch Products Actions
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

//Fetch Product Actions
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAIL = "FETCH_PRODUCT_FAIL";

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

//Fetch Products
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await fetch(`${apiURL}/products`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: FETCH_PRODUCTS_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: FETCH_PRODUCTS_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

//Fetch Product
export const fetchProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    try {
      const response = await fetch(`${apiURL}/product/${id}`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: FETCH_PRODUCT_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: FETCH_PRODUCT_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

//Create Product
export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: CREATE_PRODUCT_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
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
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: CREATE_PRODUCT_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: CREATE_PRODUCT_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};

//Update Product
export const updateProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    console.log("Product ===========> ", product);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch({ type: UPDATE_PRODUCT_FAIL, payload: "Unauthorized" });
        return Promise.reject("Unauthorized");
      }

      const response = await fetch(`${apiURL}/product/${product.productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.data });
        return Promise.resolve(data.message);
      } else {
        dispatch({ type: UPDATE_PRODUCT_FAIL, payload: data.message });
        return Promise.reject(data.message);
      }
    } catch (err) {
      dispatch({ type: UPDATE_PRODUCT_FAIL, payload: err.message });
      return Promise.reject(err.message);
    }
  };
};
