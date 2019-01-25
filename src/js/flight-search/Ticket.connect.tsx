import { connect } from 'react-redux';

import { RootState } from "../reducer";

import Ticket, {TicketProps} from "./Ticket";

const mapStateToProps = (state: RootState, props: TicketProps) => {
  const flights = state.flightSearch.flights.filter((el) => (el !== null));
  const segments = state.flightSearch.segments.filter((el) => (el !== null));
  const offerFlight = flights[props.FlightIndex];

  return {
    offerFlight,
    segments
  };
}

export default connect(mapStateToProps)(Ticket);
