import { configureStore } from "@reduxjs/toolkit";
import reducer_jokeCategory from "./reducers/joke-category.reducer";
import reducer_jokes from "./reducers/jokes.reducer";
export const store = configureStore({
    reducer: {
        categories:reducer_jokeCategory,
        jokes: reducer_jokes
    }
});