/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach(letter => {
                if (letter.letter === action.letter) {
                    letter.guessed = true;
                }
            });
            return newState;
        case 'INPUT_WORD':
            const newWord = [];
            action.word.split('').forEach(letter => {
                const newLetter = {
                    letter: letter.toUpperCase(),
                    guessed: false
                };
                newWord.push(newLetter);
            });
            return newWord;
        default:
            return state;
    }
};

export default wordLettersReducer;
