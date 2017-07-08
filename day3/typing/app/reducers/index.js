import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordListReducer from './wordListReducer';
import timeLeftReducer from './timeLeftReducer';
import streakCountReducer from './streakCountReducer';
import badGuessesReducer from './badGuessesReducer';
import correctGuessesReducer from './correctGuessesReducer';
import totalScoreReducer from './totalScoreReducer';
import userInputReducer from './userInputReducer';
import currentIndexReducer from './currentIndexReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: wordListReducer,
    timeLeft: timeLeftReducer,
    streakCount: streakCountReducer,
    totalScore: totalScoreReducer,
    badGuesses: badGuessesReducer,
    correctGuesses: correctGuessesReducer,
    userInput: userInputReducer,
    currentIndex: currentIndexReducer,
    routing
});

export default rootReducer;
