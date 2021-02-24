import { call, put, takeLatest, delay } from 'redux-saga/effects';

import request from 'utils/request';

import { getData, getDataSuccess, getDataError } from './actions';
import { GET_DATA } from './constants';

export function* getApiData({ token }) {
  try {
    // yield delay(2000);
    const response = yield call(
      request,
      `https://jsonplaceholder.typicode.com/todos`,
      {
        method: 'GET',
      },
    );

    if (response) {
      yield put(getDataSuccess(response));
    }
  } catch (err) {
    yield put(getDataError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_DATA, getApiData);
}
