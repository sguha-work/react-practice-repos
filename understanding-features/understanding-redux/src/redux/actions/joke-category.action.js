import {createAsyncThunk} from '@reduxjs/toolkit';
import { fetchJokeCategory } from '../../services/jokes.service';

export const action_fetchJokeCategory = createAsyncThunk("fetchJokeCategory", async()=>{
    const output = await fetchJokeCategory();
    return output;
});
