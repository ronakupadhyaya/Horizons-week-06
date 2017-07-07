import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';


import gameStateReducer from './gameReducer';

const rootReducer = combineReducers({
    routing,
    gameState: gameStateReducer
});

export default rootReducer;
