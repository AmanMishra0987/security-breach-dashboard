import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchBreachesRequest, fetchBreachesSuccess, fetchBreachesFailure } from './breachSlice';

function* fetchBreaches() {
  try {
    const response = yield call(axios.get, 'https://66d3057f184dce1713cf0fd8.mockapi.io/bytemonk/incidents');
    yield put(fetchBreachesSuccess(response.data));
  } catch (error) {
    yield put(fetchBreachesFailure(error.toString()));
  }
}

function* breachSaga() {
  yield takeLatest(fetchBreachesRequest.type, fetchBreaches);
}

export default breachSaga;
