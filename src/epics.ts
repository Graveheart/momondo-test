import { combineEpics } from "redux-observable";

import ticketsEpic from "./flight-search/epics";

const epics = combineEpics(
  ...ticketsEpic,
);

export default epics;