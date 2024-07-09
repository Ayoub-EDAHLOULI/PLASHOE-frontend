//store
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Change this line
import authReducer from "./Reducers/authReducer";
import userReducer from "./Reducers/userReducer";
import productReducer from "./Reducers/productReducer";
import categoryReducer from "./Reducers/categoryReducer";
import cartReducer from "./Reducers/cartReducer";
import userInfoReducer from "./Reducers/userInfoReducer";
import addressReducer from "./Reducers/addressReducer";
import paymentReducer from "./Reducers/paymentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  userInfo: userInfoReducer,
  address: addressReducer,
  payment: paymentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
