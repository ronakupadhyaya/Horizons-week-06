/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';
const initialState = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GOOD_GUESS:
            console.log(state);
            const newState = state.slice();
            newState.map(wordLetter => {
                if (wordLetter.letter === action.letter.toUpperCase()) {
                    wordLetter.guessed = true;
                }
                return wordLetter;
            });
            return newState;
        case types.SUBMIT_NEW_WORD:
            const newWord = action.word.split('').map(letter => {
                return {
                    letter: letter.toUpperCase(),
                    guessed: false
                };
            });
            return newWord;
        default:
            return state;
    }
};

export default wordLettersReducer;
