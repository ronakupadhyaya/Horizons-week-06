import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';

import gameReducer from './gameReducer';
import timerReducer from './timerReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: timerReducer,
    userInput: userReducer,
    routing
});

export default rootReducer;
