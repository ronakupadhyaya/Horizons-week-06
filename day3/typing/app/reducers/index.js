import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import indexReducer from './indexReducer';
import inputReducer from './indexReducer';

// import * as types from '../actions/types';

const rootReducer = combineReducers({
    gameReducer,
    routing,
    indexReducer,
    inputReducer,
});

export default rootReducer;
