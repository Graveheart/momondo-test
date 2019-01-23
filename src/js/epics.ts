import { combineEpics } from "redux-observable";

import ticketsEpic from "./flight-ticket/epics";

const epics = combineEpics(
  ...ticketsEpic,
);

export default epics;