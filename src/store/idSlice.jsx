import { createSlice, createAsyncThunk, useDispatch } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: [],
};

export const getId = createAsyncThunk(
  "id/getId",
  async (_, { rejectWithValue }) => {
    const res = await axios.get("https://front-test.dev.aviasales.ru/search");
    useDispatch(setId(res.data))

  }
);

export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: { setId: (state, action) => {
    state.id = action.payload
  } },
});

export const {setId} = idSlice.actions
export default idSlice.reducer