import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import inputReducer from './inputReducer';
import timeReducer from './timeReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    game: gameReducer,
    userInput: inputReducer,
    timeLeft: timeReducer,
    routing
});

export default rootReducer;
