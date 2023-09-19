import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./reducers/joke.reducer";
export const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});
