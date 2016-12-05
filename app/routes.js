// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DecksPage from './containers/DecksPage';
import CreatePage from './containers/CreatePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="decks" component={DecksPage} />
    <Route path="create" component={CreatePage} />
  </Route>
);
