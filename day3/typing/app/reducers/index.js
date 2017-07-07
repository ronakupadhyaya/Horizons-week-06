import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { wordList } from './gameReducer';

// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing,
    wordList
});

export default rootReducer;
