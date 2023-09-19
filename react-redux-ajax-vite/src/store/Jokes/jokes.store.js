import * as reduxToolkit from '@reduxjs/toolkit';
import REDUCER_JOKES from './jokes.reducers';

const STORE_JOKES = reduxToolkit.configureStore({reducer: REDUCER_JOKES});

export default STORE_JOKES;