import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordListReducer from './wordListReducer';
import timeLeftReducer from './timeLeftReducer';
import streakCountReducer from './streakCountReducer';
import totalScoreReducer from './totalScoreReducer';
import userInputReducer from './userInputReducer';
import currentIndexReducer from './currentIndexReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: wordListReducer,
    timeLeft: timeLeftReducer,
    streakCount: streakCountReducer,
    totalScore: totalScoreReducer,
    userInput: userInputReducer,
    currentIndex: currentIndexReducer,
    routing
});

export default rootReducer;
