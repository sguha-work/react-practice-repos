import { createAsyncThunk } from '@reduxjs/toolkit';
import TodoService from '../../services/todo.service';

export const action_addTodo = {
    type: "todo/add",
    info: "This action is for adding todo",
    payload: {}
}
export const action_deleteTodo = {
    type: "todo/delete",
    info: "This action is for deleting todo",
    title: ""
}

export const action_fetchTodo = createAsyncThunk('todo/fetch', TodoService.getTodo.bind(this,0,20));