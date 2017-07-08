import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordListReducer from './gameReducer';
import timerReducer from './timerReducer';
import typeReducer from './typeReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: wordListReducer,
    timer: timerReducer,
    userInput: typeReducer,
    routing
});

export default rootReducer;
