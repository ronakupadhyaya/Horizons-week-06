// Combine reducers for use by store
import { routerReducer } from 'react-router-redux';
import gameReducer from './gameReducer';
import { combineReducers } from 'redux';

// Combine the routing reducer and game reducer
const rootReducer = combineReducers({
    routerReducer,
    gameReducer
});

export default rootReducer;
