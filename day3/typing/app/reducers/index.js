import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import game from './gameReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing,
    game,
});

export default rootReducer;
