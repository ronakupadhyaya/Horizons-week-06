import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordsReducer from './wordsReducer';

const rootReducer = combineReducers({
  routing,
  words: wordsReducer,
  currPos: null,
  gameStarted: null,
  score: null,
  timeLeft: null,
  textInput: null,
});

export default rootReducer;
