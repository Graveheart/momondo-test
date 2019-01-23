import * as React from "react";
import Segment from "../models/Segment";
import Leg from '../models/Leg';
import * as moment from 'moment';

export interface FlightSegmentProps extends Segment {
  legsData?: Array<Leg>;
}

const FlightSegment: React.SFC<FlightSegmentProps> = ({Duration, legsData}) => {

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 60).toString().padStart(2, '0');
    const minutes = Math.floor(duration % 60).toString().padStart(2, '0');
    return hours + 'h ' + minutes + ' m';
  }

  const formatTime = (time: Date) => {
    time = new Date(time);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return hours + ':' + minutes;
  }

  let {Origin, Destination, Arrival, Departure, AirlineName} = legsData[0];
  if (legsData.length > 1) {
    Destination = legsData[legsData.length - 1].Destination;
    Arrival = legsData[legsData.length - 1].Arrival;
  }

  return (
    <div className="c-flights_ticket-summary-segment">
      <div className="c-flights_ticket-summary-segment-carriers">
        {AirlineName}
      </div>
      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--origin">
        <div className="c-flights_ticket-summary-segment-iata_time">
          <div className="c-flights_ticket-summary-segment-iata">{Origin.Iata}</div>
          <div className="c-flights_ticket-summary-segment-time">{formatTime(Departure)}</div>
        </div>
        <div className="c-flights_ticket-summary-segment-place">{Origin.Name}</div>
      </div>
      <div className="c-flights_ticket-summary-segment-route">
        <div className="c-flights_ticket_route">
          <div className="c-flights_ticket_route-container">
            <div className="c-flights_ticket_route-duration">{formatDuration(Duration)}</div>
            <div className="c-flights_ticket_route-stops">
                <svg className="c-flights_ticket_route-stops-svg" width="100%" height="20" focusable="false">
                  <line className="c-flights_ticket_route-stops-svg-line" x1="2" y1="3" x2="100%" y2="3" strokeWidth="2" transform="translate(-1)" />
                </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSegment;
