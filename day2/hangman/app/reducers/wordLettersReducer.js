/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'WORD_GIVEN':
            const newState = [];
            action.wordArr.forEach(letter => {
                newState.push({letter: letter, guessed: false});
            });
            return newState;
        case types.GOOD_GUESS:
            const stateCopy = [...state];
            stateCopy.forEach(letterObj => {
                if(letterObj.letter.toLowerCase() === action.letter) {
                    letterObj.guessed = true;
                }
            });
            return stateCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
