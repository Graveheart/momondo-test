import * as React from "react";
import FlightTicket from "../models/FlightTicket";

export interface FlightSearchProps {
  getFlights: (uuid: string) => undefined;
  flightTicket: FlightTicket
}

interface FlightSearchState {
}

export default class FlightSearch extends React.Component<FlightSearchProps, FlightSearchState> {

  constructor(props: FlightSearchProps) {
    super(props);
    console.log(1111111111111111);

    // this.onLoaded = this.onLoaded.bind(this);
  }

  public componentDidMount() {
    this.props.getFlights('cf66a9f2-97b2-4c7d-9c0d-0fd4ea870ffc');
  }

  public render() {
    console.log(this.props.flightTicket);
    return (
      <div className="c-flights_ticket-summary">
        <div className="c-flights_ticket-summary-content">
            <div className="c-flights_ticket-summary-header">
            </div>
            <div className="c-flights_ticket-summary-segments">
              <div className="c-flights_ticket-summary-segment">
                  <div className="c-flights_ticket-summary-segment-carriers">
                    easyJet
                  </div>
                  <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--origin">
                    <div className="c-flights_ticket-summary-segment-iata_time">
                        <div className="c-flights_ticket-summary-segment-iata">CPH</div>
                        <div className="c-flights_ticket-summary-segment-time">12:25</div>
                    </div>
                    <div className="c-flights_ticket-summary-segment-place">Copenhagen</div>
                  </div>
                  <div className="c-flights_ticket-summary-segment-route">
                    <div className="c-flights_ticket_route">
                        <div className="c-flights_ticket_route-container">
                          <div className="c-flights_ticket_route-duration">12h 05m</div>
                          <div className="c-flights_ticket_route-stops">
                              <svg className="c-flights_ticket_route-stops-svg" width="100%" height="20" focusable="false">
                                <line className="c-flights_ticket_route-stops-svg-line" x1="2" y1="3" x2="100%" y2="3" stroke-width="2" transform="translate(-1)" />
                              </svg>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      );
    }

    // private onLoaded() {
    //   this.props.getFlights('c3ee6c90-0b2a-4f2b-9a17-f06ac85e9948');
    // }
  }
