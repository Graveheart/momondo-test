import Segment from './Segment';

export default class Flight {
  public SegmentIndexes: Array<number>;
  public Segments?: Array<Segment>;
  public TicketClass: string;

  constructor(args?: {}) {
    Object.assign(this, args);
  }
}
