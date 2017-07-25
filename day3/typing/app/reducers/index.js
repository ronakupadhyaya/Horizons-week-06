import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { wordListReducer, gameTimeReducer, userInputReducer } from './gameReducer';
// import gameTimeReducer from './gameReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing: routerReducer,
    wordList: wordListReducer,
    gameTime: gameTimeReducer,
    userInput: userInputReducer
});

export default rootReducer;
