// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import StudyPage from './containers/StudyPage';
import CreatePage from './containers/CreatePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="study" component={StudyPage} />
    <Route path="create" component={CreatePage} />
  </Route>
);
