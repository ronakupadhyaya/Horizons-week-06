import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
    gameReducer,
    routing
});

export default rootReducer;
