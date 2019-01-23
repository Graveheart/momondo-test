import * as React from "react";
import Leg from "../models/Leg";

interface SegmentLegState {
}

const SegmentLeg: React.SFC<Leg> = ({AirlineName, Arrival, Departure, Destination, Duration, Origin}) => {

  const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 60).toString().padStart(2, '0');
    const minutes = Math.floor(duration % 60).toString().padStart(2, '0');
    return hours + 'h ' + minutes + ' m';
  }

  return (
    <div className="c-flights_ticket-summary-segment">
      <div className="c-flights_ticket-summary-segment-carriers">
        easyJet
      </div>
      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--origin">
        <div className="c-flights_ticket-summary-segment-iata_time">
          <div className="c-flights_ticket-summary-segment-iata">CPH</div>
          <div className="c-flights_ticket-summary-segment-time">{this.formatDuration(Duration)}</div>
        </div>
        <div className="c-flights_ticket-summary-segment-place">Copenhagen</div>
      </div>
      <div className="c-flights_ticket-summary-segment-route">
        <div className="c-flights_ticket_route">
          <div className="c-flights_ticket_route-container">
            <div className="c-flights_ticket_route-duration">12h 05m</div>
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

export default SegmentLeg;
