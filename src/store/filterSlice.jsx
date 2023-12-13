import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterState: (state, action) => {
      state.filter = action.payload;
      
    },
  },
});

export const { filterState } = filterSlice.actions;
export default filterSlice.reducer;
