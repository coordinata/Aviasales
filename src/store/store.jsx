import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import checkboxReducer from "./checkboxSlice";


export default configureStore({
  reducer: {
    filter: filterReducer,
    checkbox: checkboxReducer,

  },
});
