import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer.js';
import timerReducer from './timerReducer.js';
import scoreReducer from './scoreReducer.js';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing,
    gameReducer,
    timerReducer,
    scoreReducer
});

export default rootReducer;
