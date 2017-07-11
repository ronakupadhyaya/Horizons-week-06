import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';
import gameReducer from './gameReducer';
import timeReducer from './timeReducer';
import scoreReducer from './scoreReducer';
import userInputReducer from './userInputReducer';
import currentIndexReducer from './currentIndexReducer';
import streakReducer from './streakReducer';

const rootReducer = combineReducers({
    game: gameReducer,
    time: timeReducer,
    score: scoreReducer,
    userInput: userInputReducer,
    currentIndex: currentIndexReducer,
    streak: streakReducer,
    routing
});

export default rootReducer;
