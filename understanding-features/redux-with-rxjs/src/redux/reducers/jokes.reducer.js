import { createSlice } from "@reduxjs/toolkit";
import { action_fetchJokes } from "../actions/jokes.action";
// this reducer is for updating joke data category wise
const jokesSlice = createSlice({
    name: "jokes",
    initialState: {
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(action_fetchJokes.fulfilled, (state, response) => {
            const jokeobj = {};
            jokeobj[response.payload.categories[0]]=response.payload.value;
            if (state.data == null) {
                // if data is null then setting up new data
                state.data = {
                    ...jokeobj
                }
            } else {
                // if data is not null merging the new data
                state.data = {
                    ...state.data,
                    ...jokeobj
                }
            }
            state.pending = false;
            state.error = null;
        });
        builder.addCase(action_fetchJokes.rejected, (state, response) => {
            state.data = {
                ...state.data
            };
            state.error = response.payload;
        })
        builder.addCase(action_fetchJokes.pending, (state) => {
            state.data = {
                ...state.data
            };
            state.error = null;
        })
    }
});
const reducer_jokes = jokesSlice.reducer;
export default reducer_jokes;