import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './constants';

export function getData(token) {
  return {
    type: GET_DATA,
    token,
  };
}

export function getDataSuccess(data) {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
}

export function getDataError(error) {
  return {
    type: GET_DATA_ERROR,
    error,
  };
}
