import Flight from './Flight';

export default class Offer {
  // URL for booking a ticket
  public Deeplink: string;
  // Index to the flights array
  public FlightIndex: number;
  // The supplier which made this offer
  public Supplier: string;
  // The price
  public Price: number;

  constructor(args?: {}) {
    Object.assign(this, args);
  }
}
