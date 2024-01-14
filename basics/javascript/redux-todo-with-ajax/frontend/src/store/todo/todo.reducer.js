import { action_fetchTodo, action_addTodo, action_deleteTodo } from "./todo.action";
import { initialTodoState } from "./todo.state";
import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodoState,
    extraReducers: (builder) => {
        builder.addCase(action_fetchTodo.pending, (state) => {
            console.log('loading');
            state.loading = true;
        }).addCase(action_fetchTodo.fulfilled, (state, action) => {
            console.log('fulfilled', action.payload);
            state.loading = false;
            state.TodoList = action.payload.data;
            state.error = null;
        }).addCase(action_fetchTodo.rejected, (state, action) => {
            console.log('rejected');
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(action_addTodo.pending, (state) => {
            console.log('add loading');
            state.loading = true;
        }).addCase(action_addTodo.fulfilled, (state, action) => {
            console.log('add fulfilled', action.payload);
            state.loading = false;
            state.error = null;
        }).addCase(action_addTodo.rejected, (state, action) => {
            console.log('add rejected');
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(action_deleteTodo.pending, (state) => {
            console.log('delete loading');
            state.loading = true;
        }).addCase(action_deleteTodo.fulfilled, (state, action) => {
            console.log('delete fulfilled', action.payload);
            state.loading = false;
            state.error = null;
        }).addCase(action_deleteTodo.rejected, (state, action) => {
            console.log('delete rejected');
            state.loading = false;
            state.error = action.payload;
        });
    },
});

const reducer_todo = todoSlice.reducer;
export default reducer_todo;