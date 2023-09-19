import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chat-reducer";
export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});