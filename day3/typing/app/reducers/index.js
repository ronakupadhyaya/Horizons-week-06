import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordsReducer from './wordsReducer';
import gameStartedReducer from './gameStartedReducer';
import currPosReducer from './currPosReducer';
import scoreReducer from './scoreReducer';
import timeLeftReducer from './timeLeftReducer';

const rootReducer = combineReducers({
  routing,
  words: wordsReducer,
  currPos: currPosReducer,
  gameStarted: gameStartedReducer,
  score: scoreReducer,
  timeLeft: timeLeftReducer,
});

export default rootReducer;
