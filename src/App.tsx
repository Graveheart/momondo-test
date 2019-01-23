import * as React from "react";

import FlightSearch from "./flight-search/FlightSearch.connect";

export interface AppProps {
  loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="app">
        {this.props.loading && <div className="loading" />}
        <div className="header">
          <h1>Tickets</h1>
        </div>
        <div className="main">
          <FlightSearch />
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
