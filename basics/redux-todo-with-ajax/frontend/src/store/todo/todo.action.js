import { createAsyncThunk } from '@reduxjs/toolkit';
import TodoService from '../../services/todo.service';

export const action_fetchTodo = createAsyncThunk('todo/fetch', TodoService.getTodo);
export const action_addTodo = createAsyncThunk('todo/add', TodoService.addTodo);
export const action_deleteTodo = createAsyncThunk('todo/delete', TodoService.deleteTodo);