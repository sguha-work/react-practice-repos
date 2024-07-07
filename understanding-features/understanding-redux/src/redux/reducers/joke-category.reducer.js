import { createSlice } from "@reduxjs/toolkit";
import { action_fetchJokeCategory } from "../actions/joke-category.action";

const jokeCategorySlice = createSlice({
    name:"jokeCategory",
    initialState: {
        data: null,
        pending: false,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(action_fetchJokeCategory.fulfilled, (store, response)=>{
            console.log("response", response);
            store.data = response.payload;
            store.pending = false;
            store.error = null;
        })
        builder.addCase(action_fetchJokeCategory.rejected, (store, response)=>{
            store.data = null;
            store.pending = false;
            store.error = response;
        })
        builder.addCase(action_fetchJokeCategory.pending, (store)=>{
            store.data = null;
            store.pending = true;
            store.error = null;
        })
    }
});
const reducer_jokeCategory = jokeCategorySlice.reducer;
export default reducer_jokeCategory;