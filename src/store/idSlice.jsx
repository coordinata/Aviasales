import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: [],
};

export const getId = createAsyncThunk(
  "id/getId",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://front-test.dev.aviasales.ru/search");
    dispatch(setId(res.searchId));
  }
);

export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [getId.fulfilled]: () => console.log("fulfilled"),
    [getId.pending]: () => console.log("pending"),
    [getId.rejected]: () => console.log("rejected"),
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
