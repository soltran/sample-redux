import React from 'react';
import {store} from './index'
import { Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';


export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="netflix" component={NotFoundPage}/>
      <Route path="employment" component={NotFoundPage}/>
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
