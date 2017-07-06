/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
            {letter: 'H', guessed: true},
            {letter: 'O', guessed: false},
            {letter: 'R', guessed: false},
            {letter: 'I', guessed: false},
            {letter: 'Z', guessed: true},
            {letter: 'O', guessed: false},
            {letter: 'N', guessed: true},
            {letter: 'S', guessed: false}], action) => {
    switch(action.type) {
        case 'SET_ANSWER':
            let newWordLetter = action.word.split(''); // turn word into an array
            newWordLetter = newWordLetter.map(function(letter) {
                return {letter: letter.toUpperCase(), guessed: false};
            });
            return newWordLetter;
        case 'GOOD_GUESS':
            const newState = [ ...state ];
            newState.forEach((letterObj) => {
                if (letterObj.letter === action.letter) {
                    letterObj.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
