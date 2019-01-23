import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducer";

type Action = ActionType<typeof actions>;

import Segment from '../models/Segment';
import Leg from './../models/Leg';
import FlightSearch from './FlightSearch';

interface OwnProps {
}

const mapStateToProps = (state: RootState) => {
  const flight = state.flightSearch.flights[0];
  const segments = state.flightSearch.segments;
  const flightSegments: Array<Segment> = [];

  if (flight) {

    flight.SegmentIndexes.forEach((segmentIndex) => {
      let flightSegment = segments[segmentIndex];

      flightSegments.push({...flightSegment});
    });
  }

  return {
    flight: state.flightSearch.flights[0],
    flightSegments
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => bindActionCreators({
  getFlights: (uuid) => actions.getFlights(uuid)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearch);
