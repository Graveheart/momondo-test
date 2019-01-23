import Flight from './Flight';
import Leg from './Leg';
import Offer from './Offer';
import Segment from './Segment';

export default class FlightTicket {
  // flag indicating whether search is done or not
  public Done?: boolean;
  // the delta number of result, increases each time you call the service
  public ResultNumber?: number;
  // array of flights. A flight is the entire journey.
  // A flight is made up of one or more segments. A one-way flight has one
  // segment, whereas a return flight has two segments (one outbound and one homebound)
  public Flights?: Array<Flight>;
  // array of segments. A one-way flight will only have one segment,
  // but a return flight will have two segments; outbound and homebound segment.
  // For example, Copenhagen - New York round-trip search will
  // have 2 segments: Copenhagen -> New York and New York -> Copenhagen
  // Each of those segments can then have one or more legs if there is any
  // stop overs (see Legs)
  public Segments?: Array<Segment>;
  // array of legs. A legs is the actual individual flight from one stop to another.
  // For example, a one-way flight Copenhagen -> New York with a stopover
  // in London will have 1 segment (Copenhagen -> New York). This segment
  // will then have 2 legs (Copenhagen -> London and London -> New York)
   public Legs?: Array<Leg>;
  // array of offers (actual tickets)
   public Offers?: Array<Offer>;
 }