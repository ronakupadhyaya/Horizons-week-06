import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordList from './wordList';
import timer from './timer';
import score from './score';
import streak from './streak';
import currentIndex from './currentIndex';
import userInput from './userInput';

const rootReducer = combineReducers({
    routing,
    wordList,
    timer,
    score,
    streak,
    currentIndex,
    userInput
});

export default rootReducer;
