import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;

const selectAppPageDomain = state => state.appPage || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectData = () =>
  createSelector(
    selectAppPageDomain,
    substate => substate.data,
  );

const makeSelectLoading = () =>
  createSelector(
    selectAppPageDomain,
    substate => substate.loading,
  );

export { makeSelectLocation, makeSelectData, makeSelectLoading };
