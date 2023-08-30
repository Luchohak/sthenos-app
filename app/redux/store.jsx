"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  //Add other reducers in here
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export default store;
