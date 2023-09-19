import { createSlice } from "@reduxjs/toolkit";
import { action_createUser, action_fetchUsers, action_fetchUserDetails } from "../actions/user.action";
const userSlice = createSlice({
    name: "users",
    initialState: {
        data: {},
        details: {}
    },
    extraReducers: (builder) => {
        builder.addCase(action_createUser.fulfilled, (state, response) => {
            state.data.users.push(response.payload)
        });
        builder.addCase(action_fetchUsers.fulfilled, (state, response) => {
            state.data = response.payload;
        });
        builder.addCase(action_fetchUserDetails.fulfilled, (state, response) => {
            state.details = {
                [response.payload.id]: response.payload
            };
        });
    },
});

export default userSlice.reducer;