import * as reduxToolkit from '@reduxjs/toolkit';
// import * as ACTION from './actions/action';
import * as REDUCER from './reducers/reducer';
console.log(typeof REDUCER.REDUCER_STOCK);
const createStore = reduxToolkit.configureStore;
const STORE = createStore({reducer:REDUCER.REDUCER_STOCK});
export default STORE;