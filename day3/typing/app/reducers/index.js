import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({ // rootReducer is given to createStore
    game: gameReducer, // game is piece of the state that is given to gameReducer (see file), one of the keys is wordList
    routing,
});

export default rootReducer;
