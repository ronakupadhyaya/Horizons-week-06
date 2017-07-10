// This file combines different reducers we created
// so far we have 1. gameReducer
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing,
    gameReducer
});

export default rootReducer;
