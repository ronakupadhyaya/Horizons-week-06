/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
import {GOOD_GUESS, NEW_WORD} from '../actions/types';

const wordLettersReducer = (state = [
  {letter: 'H', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'R', guessed: false},
  {letter: 'I', guessed: false},
  {letter: 'Z', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'N', guessed: false},
  {letter: 'S', guessed: false}], action) => {
    switch(action.type) {
        case NEW_WORD:
            const word = action.inputWord.split('');
            const arr = word.map((letter) => ({letter, guessed: false}));
            return arr;
        case GOOD_GUESS:
            const tempArr = state.slice();
            tempArr.map((letter) => {
                if(letter.letter === action.inputLetter) {
                    letter.guessed = true;
                }
            });
            return tempArr;
        default:
            return state;
    }
};

export default wordLettersReducer;
