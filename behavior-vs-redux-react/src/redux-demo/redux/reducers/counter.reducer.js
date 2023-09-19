import { createSlice } from "@reduxjs/toolkit";
import { fetchCounter, setCounter } from "../actions/counter.action";
const actionList = [fetchCounter, setCounter];

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    data: 0
  },
  extraReducers: (builder) => {
    actionList.forEach((action) => {
      builder.addCase(action.fulfilled, (state, action) => {
        state.data = action.payload ? action.payload : 0;
      });
    })
  },
});

export default counterSlice.reducer;