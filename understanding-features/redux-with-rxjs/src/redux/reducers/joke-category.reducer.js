import { createSlice } from "@reduxjs/toolkit";
import { action_fetchJokeCategory } from "../actions/joke-category.action";
// this reducer is for updating store value of categories
const jokeCategorySlice = createSlice({
    name:"jokeCategory",
    initialState: {
        data: null,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(action_fetchJokeCategory.fulfilled, (store, response)=>{
            store.data = response.payload;
            store.error = null;
        })
        builder.addCase(action_fetchJokeCategory.rejected, (store, response)=>{
            store.data = null;
            store.error = response;
        })
        builder.addCase(action_fetchJokeCategory.pending, (store)=>{
            store.data = null;
            store.error = null;
        })
    }
});
const reducer_jokeCategory = jokeCategorySlice.reducer;
export default reducer_jokeCategory;