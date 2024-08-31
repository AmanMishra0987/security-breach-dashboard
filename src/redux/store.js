import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import breachReducer from './slices/breachSlice';
import breachSaga from './slices/breachSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    breaches: breachReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(breachSaga);

export default store;
