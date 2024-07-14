import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJokes } from "../../services/jokes.service";
export const action_fetchJokes = createAsyncThunk('fetchJokes',async (category)=>{
    const data = await fetchJokes(category);
    const output = {};
    output[category] = data;
    return output;
})