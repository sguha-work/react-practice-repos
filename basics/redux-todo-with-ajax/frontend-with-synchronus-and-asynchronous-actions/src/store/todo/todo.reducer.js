import { action_addTodo, action_deleteTodo, action_fetchTodo } from "./todo.action";
import { initialTodoState } from "./todo.state";
import { createSlice } from '@reduxjs/toolkit';
const reducer_todo_synchronous = (state = initialTodoState, action) => {
    console.log({ action })
    if (action) {
        switch (action.type) {
            case action_addTodo.type: {
                console.log('payload', action.payload);
                return {
                    ...state,
                    TodoList: state.TodoList.concat(action.payload)
                };
            }
            case action_deleteTodo.type: {
                let todoList = state.TodoList.filter((item) => item.title != action.title);
                return {
                    ...state,
                    TodoList: todoList
                }
            }
            default: {
                return state;
            }
        }
    } else {
        return {
            ...state
        }
    }
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodoState,
    extraReducers: (builder) => {
        builder
            .addCase(action_fetchTodo.pending, (state) => {
                console.log('loading');
                state.loading = true;
            })
            .addCase(action_fetchTodo.fulfilled, (state, action) => {
                console.log('fulfilled',action.payload);
                state.loading = false;
                state.TodoList = action.payload;
                state.error = null;
            })
            .addCase(action_fetchTodo.rejected, (state, action) => {
                console.log('rejected');
                state.loading = false;
                state.error = action.payload;
            });
    },
});

const reducer_todo_asynchronous = todoSlice.reducer;
export {reducer_todo_synchronous, reducer_todo_asynchronous};