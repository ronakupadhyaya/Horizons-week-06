import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    gameState: gameReducer,
    routing: routing
});

export default rootReducer;
