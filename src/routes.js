import React from 'react';
import {store} from './index'
import { Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';


export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRedirect to="charts" />
      <Route path="charts" component={NotFoundPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);

//
// <Route path="settings">
//   e-commerce
//   printing
//   insurance
//   packages
// </Route>
