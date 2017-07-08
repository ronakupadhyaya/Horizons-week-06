import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import wordIndexReducer from './wordIndexReducer';
import inputReducer from './inputReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing,
    game: gameReducer,
    wordIndex: wordIndexReducer,
    input: inputReducer
});

export default rootReducer;
