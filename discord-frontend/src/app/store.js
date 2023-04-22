import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendsReducer from "./reducers/friendsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friend: friendsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
