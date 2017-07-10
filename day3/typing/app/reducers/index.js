import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import scoreReducer from './scoreReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordTracking: gameReducer,
    scoreTime: scoreReducer,
    routing
});

export default rootReducer;
