import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ticket: [],
};

export const getTicket = createAsyncThunk(
  "ticket/getTicket",
  async (id, { rejectWithValue, dispatch}) => {
    try {
      const res = await axios.get(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${id}
        )}`
      );
      dispatch(setTicket(res.data.searchId));
      // return res.data.searchId; //  результат для использования в .then
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = action.payload;
    },
  },
});

export const { setTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
