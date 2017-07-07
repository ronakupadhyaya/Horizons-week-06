/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            for(let i = 0; i < newState.length; i++) {
                if (newState[i].letter === action.letter) {
                    newState[i].guessed = true;
                }
            }
            return newState;
        case 'WORD_SUBMISSION':
            const newState1 = [...state];
            for(let i = 0; i < action.word.length; i++) {
                const letterObj = {letter: action.word[i].toUpperCase(), guessed: false};
                newState1.push(letterObj);
            }
            return newState1;
        default:
            return state;
    }
};

export default wordLettersReducer;
