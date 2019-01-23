import { ActionType } from 'typesafe-actions';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducer";

type Action = ActionType<typeof actions>;

import Ticket, {TicketProps} from "./Ticket";

const mapStateToProps = (state: RootState, props: TicketProps) => {
  const flights = state.flightSearch.flights;

  return {
    flight: flights[props.FlightIndex]
  };
}

export default connect(mapStateToProps)(Ticket);
