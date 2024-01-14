import { createSlice } from "@reduxjs/toolkit";
import { fetchJokeCategories } from "../actions/fetch-joke-categories.action";
const actionList = [fetchJokeCategories];

const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    error: null
  },
  extraReducers: (builder) => {
    actionList.forEach((action)=>{
      builder.addCase(action.pending, (state) => {
        state.isLoading = true;
        state.data = null;
      });
      builder.addCase(action.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(action.rejected, (state, action) => {
        state.error = action.error;
        state.isError = true;
        state.isLoading = false;
        state.data = null;
      });
    })
  },
});

export default jokeSlice.reducer;
