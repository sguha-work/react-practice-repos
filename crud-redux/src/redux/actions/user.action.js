import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const action_createUser = createAsyncThunk("createUser", async (response) => {
    return response;
});
export const action_fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const data = await UserService.fetchUsers();
    return data;
});
export const action_fetchUserDetails = createAsyncThunk("fetchUserDetails", async (id) => {
    const data = await UserService.fetchUserDetails(id);
    return data;
});
export const action_updateUsers = createAsyncThunk("updateUser", async (value) => {
    return value;
});