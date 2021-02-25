/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { GET_DATA, GET_DATA_ERROR, GET_DATA_SUCCESS } from './constants';

export const initialState = {
  data: {},
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DATA: {
        draft.loading = true;
        break;
      }
      case GET_DATA_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        break;
      case GET_DATA_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
