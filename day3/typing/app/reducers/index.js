import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import timerReducer from './timerReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: timerReducer,
    routing,

});

export default rootReducer;
