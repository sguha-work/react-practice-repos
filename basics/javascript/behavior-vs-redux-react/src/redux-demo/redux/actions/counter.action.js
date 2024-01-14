import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCounter = createAsyncThunk("fetchCounter", async (response) => {
    return response;
});
export const setCounter = createAsyncThunk("setCounter", async (value) => {
    return value;
});