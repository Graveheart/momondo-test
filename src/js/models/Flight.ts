import Segment from './Segment';

export default class Flight {
  public SegmentIndexes: Array<number>;
  public TicketClass: string;

  constructor(args?: {}) {
    Object.assign(this, args);
  }
}
