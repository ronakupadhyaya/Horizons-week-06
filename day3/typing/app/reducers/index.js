import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import typedListReducer from './typedListReducer';
import userListReducer from './userListReducer';
import renderStateReducer from './renderStateReducer';
import timerReducer from './timerReducer';

// import * as types from '../actions/types';

const rootReducer = combineReducers({
    wordList: gameReducer,
    typedList: typedListReducer,
    userList: userListReducer,
    renderState: renderStateReducer,
    timer: timerReducer,
    routing: routerReducer
});

export default rootReducer;
