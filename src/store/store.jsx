import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import checkboxReducer from "./checkboxSlice";
import idReducer from "./idSlice";
import ticketReducer from "./ticketSlice";


export default configureStore({
  reducer: {
    filter: filterReducer,
    checkbox: checkboxReducer,
    id: idReducer,
    ticket: ticketReducer,
  },
});
