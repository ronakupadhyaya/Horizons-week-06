import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';

import game from './gameReducer';

const rootReducer = combineReducers({
    routing,
    game,
});

export default rootReducer;
