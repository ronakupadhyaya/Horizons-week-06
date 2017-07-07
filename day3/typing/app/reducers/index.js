import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';
import gameReducer from './gameReducer.js';
import infobarReducer from './infobarReducer.js';
import textBoxReducer from './textBoxReducer.js';

const rootReducer = combineReducers({
    wordList: gameReducer,
    gameInfo: infobarReducer,
    textBox: textBoxReducer,
    routing
});

export default rootReducer;
