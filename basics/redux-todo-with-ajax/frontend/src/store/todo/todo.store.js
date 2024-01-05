import {configureStore} from '@reduxjs/toolkit';
import reducer_todo from './todo.reducer';
const store_todo = configureStore({
    reducer: reducer_todo,
    middleware: (getDefaultMiddleware) => {console.log("middleware",getDefaultMiddleware);return getDefaultMiddleware();}
});

export default store_todo;