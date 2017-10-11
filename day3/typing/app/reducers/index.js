import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import indexReducer from './indexReducer';
import inputReducer from './inputReducer';
import timerReducer from './timerReducer';
import scoreReducer from './scoreReducer';
import gameOverReducer from './gameOverReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    userInput: inputReducer,
    currentIndex: indexReducer,
    wordList: gameReducer,
    timeLeft: timerReducer,
    score: scoreReducer,
    gameOver: gameOverReducer,
    routing
});

export default rootReducer;
