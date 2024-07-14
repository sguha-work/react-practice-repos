import { createSlice } from "@reduxjs/toolkit";
import { action_fetchJokes } from "../actions/jokes.action";
// this reducer is for updating joke data category wise
const jokesSlice = createSlice({
    name: "jokes",
    initialState: {
        data: null,
        pending: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(action_fetchJokes.fulfilled, (state, response) => {
            if (state.data == null) {
                // if data is null then setting up new data
                state.data = {
                    ...response.payload
                }
            } else {
                // if data is not null merging the new data
                state.data = {
                    ...state.data,
                    ...response.payload
                }
            }
            state.pending = false;
            state.error = null;
        });
        builder.addCase(action_fetchJokes.rejected, (state, response) => {
            state.data = {
                ...state.data
            };
            state.pending = false;
            state.error = response.payload;
        })
        builder.addCase(action_fetchJokes.pending, (state) => {
            state.data = {
                ...state.data
            };
            state.pending = true;
            state.error = null;
        })
    }
});
const reducer_jokes = jokesSlice.reducer;
export default reducer_jokes;