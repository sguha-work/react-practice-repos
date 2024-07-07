import { createSlice } from "@reduxjs/toolkit";
import { action_fetchJokes } from "../actions/jokes.action";
const jokesSlice = createSlice({
    name:"jokes",
    initialState: {
        data: null,
        pending: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(action_fetchJokes.fulfilled, (state, response)=>{
            state.data = response.payload;
            state.pending = false;
            state.error = null;
        });
        builder.addCase(action_fetchJokes.rejected, (state, response)=>{
            state.data = null;
            state.pending = false;
            state.error = response.payload;
        })
        builder.addCase(action_fetchJokes.pending, (state)=>{
            state.data = null;
            state.pending = true;
            state.error = null;
        })
    }
});
const reducer_jokes = jokesSlice.reducer;
export default reducer_jokes;