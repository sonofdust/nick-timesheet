// import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';

// import request from 'utils/request';
import { AppData } from './clientTestData';

// import { getData, getDataSuccess, getDataError } from './actions';
import { getDataSuccess, getDataError } from './actions';
import { GET_DATA } from './constants';

export function* getApiData() {
  try {
    // yield delay(1000);
    // const response = yield call(
    //   request,
    //   `https://jsonplaceholder.typicode.com/todos`,
    //   {
    //     method: 'GET',
    //   },
    // )

    yield put(getDataSuccess(AppData));

    // if (response) {
    //   yield put(getDataSuccess(AppData));
    // }
  } catch (err) {
    yield put(getDataError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_DATA, getApiData);
}
