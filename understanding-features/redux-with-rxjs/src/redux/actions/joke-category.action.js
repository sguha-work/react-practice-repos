import {createAsyncThunk} from '@reduxjs/toolkit';

export const action_fetchJokeCategory = createAsyncThunk("fetchJokeCategory", async(data)=>{
    return Promise.resolve(data);
});
