import * as React from "react";
import { v4 as uuidv4 } from 'uuid';
import Offer from "./models/Offer";
import Ticket from "./flight-ticket/Ticket.connect";

export interface AppProps {
  getFlights: (uuid: string) => undefined;
  loading: boolean;
  offers?: Array<Offer>;
}

export default class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  public componentDidMount() {
    const uuid = uuidv4();
    this.props.getFlights(uuid);
  }

  render() {
    return (
      <div className="c-app_developertest-body">
        <div className="c-app_developertest-layout">
            <div className="c-app_developertest-body-content">
              {this.props.loading ?
                <h1>Loading your tickets... Please wait</h1>
              : this.props.offers.map((offer, i) => (
                  <Ticket key={i} {...offer}></Ticket>
                ))}
            </div>
        </div>
      </div>
    );
  }
}
