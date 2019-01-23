import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions";

import { RootState } from "./reducer";

import App from "./App";

type Action = ActionType<typeof actions>;

interface OwnProps {
}

const mapStateToProps = (state: RootState) => {
  const offers = state.flightSearch.offers.filter((el) => (el != null));

  if (offers.length) {
    offers.sort((a, b) => {
      // if (!a) {return -1};
      // if (!b) {return 1};
      return a.Price - b.Price
    });
  }
  return {
    offers: state.flightSearch.offers,
    loading: !state.flightSearch.done
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => bindActionCreators({
  getFlights: (uuid) => actions.getFlights(uuid)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);