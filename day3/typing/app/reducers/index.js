import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import inputValueReducer from './inputValueReducer';

const rootReducer = combineReducers({
    wordList: gameReducer,
    timer: gameReducer,
    userInput: inputValueReducer,
    routing: routing
});

export default rootReducer;
