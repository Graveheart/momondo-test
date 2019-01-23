import Leg from './Leg';

export default class Segment {
  // The duration of the entire segment in minutes
  public Duration: number;
  // indexes to the legs array
  public LegIndexes: Array<number>;

  public Legs?: Array<Leg>;

  constructor(args?: {}) {
    Object.assign(this, args);
  }
}
