import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';

import gameReducer from './gameReducer';
import timerReducer from './timerReducer';


const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: timerReducer,
    routing
});

export default rootReducer;
