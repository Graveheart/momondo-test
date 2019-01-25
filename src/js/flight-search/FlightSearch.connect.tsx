import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "../actions";

import { RootState } from "../reducer";

import App from "./FlightSearch";

type Action = ActionType<typeof actions>;

const mapStateToProps = (state: RootState) => {
  let offers = state.flightSearch.offers.filter((el) => (el != null));
  offers.sort((a, b) => {
    return a.Price - b.Price
  });

  return {
    offers,
    loading: !state.flightSearch.done
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({
  getFlights: (uuid) => actions.getFlights(uuid)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
