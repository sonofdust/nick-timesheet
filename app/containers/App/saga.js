import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { getData, getDataSuccess, getDataError } from './actions';
import { GET_DATA } from './constants';

export function* getApiData({ token }) {
  try {
    const response = yield call(
      request,
      `https://jsonplaceholder.typicode.com/todos`,
      {
        method: 'GET',
      },
    );
    console.log('response', response);

    if (response && response.status === 200) {
      yield put(getDataSuccess(response));
    }
  } catch (err) {
    yield put(getDataError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_DATA, getApiData);
}
