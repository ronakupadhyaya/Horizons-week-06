import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import timerReducer from './timerReducer';
import inputReducer from './inputReducer';

// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: timerReducer,
    input: inputReducer,
    routing: routing // this reducer is used by React Router in Redux
});

export default rootReducer;
