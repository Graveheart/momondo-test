import { ActionType } from 'typesafe-actions';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducer";

type Action = ActionType<typeof actions>;

import TicketSegment, {TicketSegmentProps} from "./TicketSegment";
import Leg from './../models/Leg';

const mapStateToProps = (state: RootState, props: TicketSegmentProps) => {
  const legs = state.flightSearch.legs;

  const legsData: Array<Leg> = [];
  props.LegIndexes.forEach((legIndex) => {
    legsData.push(legs[legIndex]);
  });

  return {
    legsData
  };
}

export default connect(mapStateToProps)(TicketSegment);
