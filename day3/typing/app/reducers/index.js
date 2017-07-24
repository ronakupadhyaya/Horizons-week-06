// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import timerReducer from './timerReducer.js';
import userInputReducer from './userInputReducer.js';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    timer: timerReducer,
    user: userInputReducer

});

export default rootReducer;
