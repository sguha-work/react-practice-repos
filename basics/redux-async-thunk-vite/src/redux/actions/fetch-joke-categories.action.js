import { createAsyncThunk } from "@reduxjs/toolkit";
import Ajax from "../../services/ajax.service";
export const fetchJokeCategories = createAsyncThunk("fetchJokeCategories", async () => {
    const ajaxServiceInstance = new Ajax();
    const response = await ajaxServiceInstance.get('https://api.chucknorris.io/jokes/categories');
    return response;
});