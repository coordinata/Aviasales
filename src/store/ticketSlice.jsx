import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ticket: [],
};

export const getTicket = createAsyncThunk(
  "ticket/getTicket",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
      );
      const ticketData = res.data.tickets;
      dispatch(setTicket(ticketData));
    } catch (error) {
      throw new Error("Билеты не найдены");
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
