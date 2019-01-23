import * as React from "react";
import Flight from "../models/Flight";
import { v4 as uuidv4 } from 'uuid';
import Segment from "../models/Segment";
import FlightLeg from './FlightLeg';
import TicketSegment from "./TicketSegment.connect";

export interface FlightSearchProps {
  getFlights: (uuid: string) => undefined;
  flight?: Flight,
  flightSegments?: Array<Segment>
}

interface FlightSearchState {
}

export default class FlightSearch extends React.Component<FlightSearchProps, FlightSearchState> {

  constructor(props: FlightSearchProps) {
    super(props);
  }

  public componentDidMount() {
    const uuid = uuidv4();
    this.props.getFlights(uuid);
  }

  public render() {
    if (!this.props.flight) {
      return null;
    }
    // const offer = this.props.flightTicket.Offers[0];
    const flight = this.props.flight;
    const Legs = this.props.flightSegments[0].Legs;
    return (
      <div className="c-flights_ticket-summary">
        <div className="c-flights_ticket-summary-content">
            <div className="c-flights_ticket-summary-header">
            </div>
            <div className="c-flights_ticket-summary-segments">
              <div className="c-flights_ticket-summary-segment">
                {this.props.flightSegments.map((segment, i) => {
                  return (
                    <TicketSegment key={i} {...segment}></TicketSegment>
                  );
                  })
                }
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
