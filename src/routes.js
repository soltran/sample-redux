import React from 'react';
import { Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';
import Employment from './containers/Employment/Employment.container';
import ToDo from './containers/ToDo/ToDosContainer';


export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="netflix" component={NotFoundPage}/>
      <Route path="employment" component={Employment}/>
      <Route path="todo" component={ToDo} />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
