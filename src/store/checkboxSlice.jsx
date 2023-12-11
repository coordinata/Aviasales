import { createSlice } from "@reduxjs/toolkit";

const initialState = { checkbox: "" };

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    checkboxState: (state, action) => {
      state.checkbox = action.payload;
    },
  },
});

export const { checkboxState } = checkboxSlice.actions;
export default checkboxSlice.reducer;
