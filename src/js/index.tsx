import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.connect';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import '../style/index.css';
import '../style/button.css';
import '../style/flights-ticket.css';
import '../style/flights-ticket-route.css';

export const store = configureStore();

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
