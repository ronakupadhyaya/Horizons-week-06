import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import badGuessesReducer from './badGuessesReducer';
import wordLettersReducer from './wordLettersReducer';
import guessedLettersReducer from './guessedLettersReducer';
import newWordReducer from './newWordReducer';

const rootReducer = combineReducers({
    badGuesses: badGuessesReducer,
    wordLetters: wordLettersReducer,
    guessedLetters: guessedLettersReducer,
    newWord: newWordReducer,
    routing: routerReducer // this reducer is used by React Router in Redux
});

export default rootReducer;
