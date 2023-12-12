import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  all: false,
  no_transfer: false,
  one_transfer: false,
  two_transfer: false,
  tree_transfer: false,
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState: initialState,
  reducers: {
    checkboxState: (state, action) => {
      const checkbox = action.payload;

      if (checkbox === "Все") {
        state.all = !state.all;

        if (state.all === true) {
          state.no_transfer = true;
          state.one_transfer = true;
          state.two_transfer = true;
          state.tree_transfer = true;
        } else {
          state.no_transfer = false;
          state.one_transfer = false;
          state.two_transfer = false;
          state.tree_transfer = false;
        }
      // } else {
      //   // Если любая другая галочка снимается при включенной галочке "Все"
      //   state.all = false;

        // Если все галочки включены, проставляем галочку "Все"
        //     if (
        //       state.no_transfer &&
        //       state.one_transfer &&
        //       state.two_transfer &&
        //       state.tree_transfer
        //     ) {
        //       state.all = true;
        //     }
        //   }
        // },
        // toggleFilter: (state, action) => {
        //   // Переключение состояния отдельного фильтра
        //   const filterName = action.payload;
        //   state[filterName] = !state[filterName];

        //   // Если все галочки включены, проставляем галочку "Все"
        //   if (
        //     state.no_transfer &&
        //     state.one_transfer &&
        //     state.two_transfer &&
        //     state.tree_transfer
        //   ) {
        //     state.all = true;
        //   } else {
        //     // Если любая галочка снимается, снимаем галочку "Все"
        //     state.all = false;
      }
      // return state
    },
  },
});

export const { checkboxState } = checkboxSlice.actions;
export default checkboxSlice.reducer;
