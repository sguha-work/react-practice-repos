import { createSlice } from "@reduxjs/toolkit";
import { postChat, receiveBotReply } from "../actions/chat.action";
const actionList = [postChat, receiveBotReply];

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        data: {
            message: '',
            time: 0,
            type: ''
        }
    },
    extraReducers: (builder) => {
        actionList.forEach((action) => {
            builder.addCase(action.fulfilled, (state, action) => {
                state.data = action.payload ? action.payload : {
                    message: '',
                    time: 0,
                    type: ''
                };
            });
        })
    },
});

export default chatSlice.reducer;