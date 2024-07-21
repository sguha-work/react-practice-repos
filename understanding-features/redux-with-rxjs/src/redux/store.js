import { configureStore } from "@reduxjs/toolkit";
import reducer_jokeCategory from "./reducers/joke-category.reducer";
import reducer_jokes from "./reducers/jokes.reducer";
export const store = configureStore({
    reducer: {
        categories:reducer_jokeCategory, // for storing joke categories
        jokes: reducer_jokes // for storing category wise joke data
    }
});