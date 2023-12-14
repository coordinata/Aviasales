import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: null,
};

export const getId = createAsyncThunk(
  "id/getId",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        "https://aviasales-test-api.kata.academy/search"
      );
      dispatch(setId(res.data.searchId));
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
