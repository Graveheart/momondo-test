import { ActionType, getType } from 'typesafe-actions';

import * as actions from "../actions";
import Flight from "../models/Flight";
import Segment from '../models/Segment';
import Leg from '../models/Leg';
import Offer from '../models/Offer';

type Action = ActionType<typeof actions>;

export interface FlightsState {
  readonly flights: Array<Flight>;
  readonly segments: Array<Segment>;
  readonly legs: Array<Leg>;
  readonly offers: Array<Offer>;
  readonly done: boolean;
  readonly error?: Error;
  readonly uuid?: string;
}

const initialState: FlightsState = {
  done: false,
  flights: [],
  segments: [],
  legs: [],
  offers: [],
}

export function flightsReducer(state: FlightsState = initialState, action: Action): FlightsState {
  switch (action.type) {
    case getType(actions.getFlights):
      return {...state, uuid: action.payload };
    case getType(actions.setFlights):
      const legs = [...state.legs, ...action.payload.Legs];
      const flights = [...state.flights, ...action.payload.Flights];
      const segments = [...state.segments, ...action.payload.Segments];
      const offers = [...state.offers, ...action.payload.Offers];
      const done = action.payload.Done;

      return {...state, done, legs, flights, segments, offers};
    case getType(actions.flightsErrored):
      return {...state, done: true, error: action.payload}
    default:
      return state;
  }
}
