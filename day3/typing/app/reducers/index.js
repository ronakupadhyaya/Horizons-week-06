import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
<<<<<<< HEAD
import gameReducer from './gameReducer';
import timerReducer from './timerReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: timerReducer,
    routing,

=======
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    routing
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
});

export default rootReducer;
