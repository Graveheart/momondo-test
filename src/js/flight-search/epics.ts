import { ajax } from 'rxjs/ajax';
import { from, of } from 'rxjs';
import { map, concatMap, filter, catchError, retry } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from '../actions';
import { getApiUrl } from '../endpoints';
import { RootState } from '../reducer';

type Action = ActionType<typeof actions>;

const getNextFlightsEpic: Epic<Action, Action, RootState> = (action$, state$) => action$.pipe(
  filter(isActionOf(actions.setFlights)),
  filter(action => !action.payload.Done),
  map(() => actions.getFlights(state$.value.flightSearch.uuid))
);

const getFlightsEpic: Epic<Action, Action, RootState> = (action$) => action$.pipe(
  filter(isActionOf(actions.getFlights)),
  concatMap(
    action =>
    ajax({ url: getApiUrl('flightSearch', action.payload)}).pipe(
      map(response => actions.setFlights(response.response)),
      retry(2),
      catchError(error => of(actions.flightsErrored(error)))
    )
  )
);

export default [
  getFlightsEpic,
  getNextFlightsEpic
];
