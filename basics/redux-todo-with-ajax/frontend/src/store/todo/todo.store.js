import {configureStore} from '@reduxjs/toolkit';
import {reducer_todo_synchronous, reducer_todo_asynchronous} from './todo.reducer';
const store_todo = configureStore({
    reducer: {reducer_todo_synchronous, reducer_todo_asynchronous},
    middleware: (getDefaultMiddleware) => {console.log("middleware",getDefaultMiddleware);return getDefaultMiddleware();}
});

export default store_todo;