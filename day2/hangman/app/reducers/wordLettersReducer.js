/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const arr = [
  {letter: 'H', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'R', guessed: false},
  {letter: 'I', guessed: false},
  {letter: 'Z', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'N', guessed: false},
  {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = arr, action) => {
  // action = {type: 'TYPE', letter: 'l' } --> the player's guesses
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [...state]; // the correct letters [{letter: 'l', guessed: false}]
            return newState.map( letter => {
                if (action.letter === letter.letter) {
                    return Object.assign({}, letter, {guessed: true}); // marking a letter as guessed
                }
                return Object.assign({}, letter);
            });
        default:
            return state;
    }
};

export default wordLettersReducer;

// arr = [1, 2, 3, 4, 5]
//
// arr.map( (number) => {
//   return 'one';
// })
//
// arr => ['one', 'one', 'one', 'one', 'one']
