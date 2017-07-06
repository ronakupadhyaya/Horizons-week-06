/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */


import types from '../actions/types';
const word = [{letter: 'H', guessed: false},
            {letter: 'O', guessed: false},
            {letter: 'R', guessed: false},
            {letter: 'I', guessed: false},
            {letter: 'Z', guessed: false},
            {letter: 'O', guessed: false},
            {letter: 'N', guessed: false},
            {letter: 'S', guessed: false}];
const wordLettersReducer = (state = word, action) => {
    switch(action.type) {
        case types.goodGuess:
            return state.map(letterObj => {
                if(letterObj.letter === action.letter) {
                    letterObj.guessed = true;
                }
                return letterObj;
            }
              );
        case types.setWord:
            const letters = action.word.split('');
            return letters.map(letter => {
                return {
                    letter: letter,
                    guessed: false
                };
            });
        default: return state;
    }
};

export default wordLettersReducer;
