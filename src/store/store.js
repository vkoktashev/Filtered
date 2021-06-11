import { configureStore } from "@reduxjs/toolkit";
import filteredReducer from "./filteredSlice";

export const store = configureStore({
	reducer: filteredReducer,
});
