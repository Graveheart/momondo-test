import { combineReducers } from 'redux';

import { flightsReducer, FlightsState } from './flight-ticket/reducer';

export type RootState = {
  flightSearch: FlightsState;
};

const rootReducer = combineReducers({
  flightSearch: flightsReducer
});

export default rootReducer;