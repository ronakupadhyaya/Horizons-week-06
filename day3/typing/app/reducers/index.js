// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userInputReducer from './userInputReducer.js';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    user: userInputReducer
});

export default rootReducer;
