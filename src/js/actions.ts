import { createAction } from "typesafe-actions";
import FlightSearch from "./models/FlightSearch";

// constants
export const FLIGHTS_GET   = "@@flights/SEARCH";
export const FLIGHTS_SET = "@@flights/SET";
export const FLIGHTS_ERROR = "@@flights/ERROR";

// action creators
export const getFlights = createAction(FLIGHTS_GET, resolve => (uuid: string) => resolve(uuid));

export const setFlights = createAction(FLIGHTS_SET, resolve => ({Flights, Segments, Legs, Offers, Done}: FlightSearch) => resolve({Flights, Segments, Legs, Offers, Done}));

export const flightsErrored = createAction(FLIGHTS_ERROR, resolve => (error: Error) => resolve(error));
