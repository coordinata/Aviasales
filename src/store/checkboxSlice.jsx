import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTransfer: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  treeTransfer: false
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState: initialState,
  reducers: {
    setCheckboxState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCheckboxState } = checkboxSlice.actions;

export default checkboxSlice.reducer;
