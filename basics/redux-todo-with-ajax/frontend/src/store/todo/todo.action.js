import { createAsyncThunk } from '@reduxjs/toolkit';
import TodoService from '../../services/todo.service';

export const action_fetchTodo = createAsyncThunk('todo/fetch', TodoService.getTodo);