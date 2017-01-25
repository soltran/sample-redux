// Set up your application entry point here...
/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {screenResize} from './global/globalActions'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { syncHistoryWithStore } from 'react-router-redux';

export const store = configureStore();

window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth, window.innerHeight));
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Router history={history} routes={routes} />
      </div>
    </MuiThemeProvider>
  </Provider>, document.getElementById('app')
);
