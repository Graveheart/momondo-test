import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from "typesafe-actions";

import rootReducer, { RootState } from "./reducer";
import epics from './epics';
import * as actions from "./actions";

type Action = ActionType<typeof actions>;
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

//the reducers define the initial state
export default function configureStore(initialState?: RootState) {
  const middlewares = [
    epicMiddleware,
  ];
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  const store =  createStore(
    rootReducer,
    initialState,
    enhancer
  );

  epicMiddleware.run(epics);
  return store;
}
