import { createAsyncThunk } from "@reduxjs/toolkit";
export const postChat = createAsyncThunk("postChat", async (response) => {
    return response;
});
export const receiveBotReply = createAsyncThunk("receiveBotReply", async (value) => {
    return value;
});