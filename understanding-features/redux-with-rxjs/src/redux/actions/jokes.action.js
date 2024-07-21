import { createAsyncThunk } from "@reduxjs/toolkit";
export const action_fetchJokes = createAsyncThunk('fetchJokes',async (data)=>{
    return Promise.resolve(data);
})