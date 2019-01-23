export default class Leg {
  // The name of the airline
  public AirlineName: string;
  // date of arrival (local time)
  public Arrival: Date;
  // date of departure (local time)
  public Departure: Date;
  // the destination of the leg (the airport that the flight lands at)
  public Destination: {
    Iata: string;
    Name: string;
  };
  // duration of the leg in minutes
  public Duration: number;
  // the origin of the leg (the airport that the flight departs from)
  public Origin: {
    Iata: string;
    Name: string;
  };

  constructor(args?: {}) {
    Object.assign(this, args);
  }
}
