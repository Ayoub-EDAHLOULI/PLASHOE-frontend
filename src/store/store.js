//store
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Change this line
import authReducer from "./Reducers/authReducer";
import userReducer from "./Reducers/userReducer";
import productReducer from "./Reducers/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
