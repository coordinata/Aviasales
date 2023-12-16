// import { createSlice } from "@reduxjs/toolkit";

// const checkboxTrue = new Set();

// export const initialState = checkboxTrue;

// export const checkboxSlice = createSlice({
//   name: "checkbox",
//   initialState: initialState,
//   reducers: {
//     checkboxState: (state, action) => {
//       const checkbox = action.payload;

//       if (checkbox === "Все") {
//         if (state.has(checkbox)) {
//           state.delete(checkbox);
//         } else {
//           state.add(checkbox);
//         }
//       } else {
//         if (state.has("Все")) {
//           state.delete("Все");
//         }

//         if (state.has(checkbox)) {
//           state.delete(checkbox);
//         } else {
//           state.add(checkbox);
//         }
//       }
//     },
//   },
// });

// export const { checkboxState } = checkboxSlice.actions;
// export default checkboxSlice.reducer;
