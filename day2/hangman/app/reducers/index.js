import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
<<<<<<< HEAD
import badGuessesReducer from './badGuessesReducer';
import wordLettersReducer from './wordLettersReducer';
=======
// import badGuessesReducer from './badGuessesReducer';
// import wordLettersReducer from './wordLettersReducer';
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a

/*
  combineReducers lets you meld several reducers into one.
  So calling combineReducers after having uncommented the below
  should give you a reducer for a combined state that looks like:
    {
      badGuesses: STATE FROM BAD GUESSES REDUCER,
      wordLetters: STATE FROM WORD LETTERS REDUCER,
      routing: STATE FROM ROUTER REDUCER (you don't care about this)
    }
<<<<<<< HEAD
    We will represent The letters in the answer and whether or not they have
    been guessed as a piece of state called wordLetters that will be an array of objects,
    each of which has keys letter (a one character string) and guessed (a boolean).
*/
const rootReducer = combineReducers({
    badGuesses: badGuessesReducer,
    wordLetters: wordLettersReducer,
=======
*/
const rootReducer = combineReducers({
  /*
    badGuesses: badGuessesReducer,
    wordLetters: wordLettersReducer,
  */
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
    routing: routerReducer // this reducer is used by React Router in Redux
});

export default rootReducer;
