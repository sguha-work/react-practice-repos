import * as reduxToolkit from '@reduxjs/toolkit';
import { reducer_todo } from './todo.reducer';

const store_todo = reduxToolkit.configureStore({reducer: reducer_todo,middleware:(getDefaultMiddleware) => getDefaultMiddleware()});

export default store_todo;