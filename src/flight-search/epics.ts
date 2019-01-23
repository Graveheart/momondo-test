import { ajax } from 'rxjs/ajax';
import { from, of } from 'rxjs';
import { map, concatMap, filter, catchError, retry, pluck, takeUntil } from 'rxjs/operators';
import { Epic, ActionsObservable } from 'redux-observable';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from '../actions';
import { getApiUrl } from '../endpoints';
import { FlightsState } from './reducer';

type Action = ActionType<typeof actions>;

const getFlightEpic: any = (action$: ActionsObservable<Action>) => action$.pipe(
  filter(isActionOf(actions.getFlights)),
  concatMap(
    action =>
    ajax({ url: getApiUrl('flightSearch', action.payload.uuid)}).pipe(
      map(response => actions.setFlights(response.response)),
      retry(2),
      catchError(error => of(actions.flightsErrored(error))),
      takeUntil(action$.ofType(actions.FLIGHTS_CANCEL))
    )
  )
);

export default [
  getFlightEpic
];
