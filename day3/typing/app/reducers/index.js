import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import timeReducer from './timeReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: gameReducer,
    timed: timeReducer,
    routing
});

export default rootReducer;
