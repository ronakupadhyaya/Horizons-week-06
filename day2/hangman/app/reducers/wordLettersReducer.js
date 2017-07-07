/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [{letter: 'e', guessed: false},
  {letter: 'l', guessed: false},
  {letter: 'i', guessed: false},
  {letter: 's', guessed: false},
  {letter: 'e', guessed: false}], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            return state.map((obj) => {
                if (obj.letter === action.letter) {
                    const newGuess = Object.assign({}, obj);
                    newGuess.guessed = true;
                    return newGuess;
                }
                return obj;
            }
            );
        case 'NEW_GAME':
            const newState = [];
            const newLetters = action.word.split('');
            newLetters.map((letter)=> newState.push({letter: letter, guessed: false}));
            return newState;
        default: return state;
    }
};

export default wordLettersReducer;
