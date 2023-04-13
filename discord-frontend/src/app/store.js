import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
