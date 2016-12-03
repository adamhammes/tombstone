// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import decks from './decks';

const rootReducer = combineReducers({
  routing,
  decks
});

export default rootReducer;
