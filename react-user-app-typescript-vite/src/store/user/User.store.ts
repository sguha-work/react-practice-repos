import * as reduxToolkit from '@reduxjs/toolkit';
import USER_REDUCERS from './User.reducers';

const USERS_STORE = reduxToolkit.configureStore({reducer: USER_REDUCERS,middleware:(getDefaultMiddleware) => {
    return getDefaultMiddleware();
}});

export default USERS_STORE;