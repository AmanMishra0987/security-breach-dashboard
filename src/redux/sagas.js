import { all, call } from 'redux-saga/effects';
import breachSaga from './slices/breachSaga';

export default function* rootSaga() {
  yield all([
    call(breachSaga),
    // add other sagas here
  ]);
}

