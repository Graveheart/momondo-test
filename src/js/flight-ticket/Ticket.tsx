import * as React from "react";
import Offer from "../models/Offer";
import Flight from "../models/Flight";
import FlightSegment from "./FlightSegment.connect";

export interface TicketProps extends Offer {
  flight?: Flight;
}

const Ticket: React.SFC<TicketProps> = ({flight, Price, Deeplink}) => {
  const formattedPrice = Price ? Price.toFixed(3) : 0;

  return (
    <div className="c-flights_ticket">
      <div className="c-flights_ticket-container">
        <div className="c-flights_ticket-content">
          <div className="c-flights_ticket-summary">
            <div className="c-flights_ticket-summary-content">
              <div className="c-flights_ticket-summary-header">
              </div>
              <div className="c-flights_ticket-summary-segments">
              </div>
              </div>
            <div className="c-flights_ticket-summary-deal">
              <div className="c-flights_ticket-summary-deal-main">
                  <div className="c-flights_ticket-summary-deal-prices">
                      <div className="c-flights_ticket-summary-deal-price c-flights_ticket-summary-deal-price--single">{formattedPrice} HUF</div>
                  </div>
              </div>
              <div className="c-flights_ticket-summary-deal-footer">
                <div className="c-flights_ticket-summary-deal-button c-button c-push_button">
                  <div className="c-button-layers">
                      <div className="c-button-outline"></div>
                      <div className="c-button-fill"></div>
                  </div>
                  <div className="c-button-content" onClick={() => { window.location.href = Deeplink;}}>
                    Book
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

export default Ticket;
