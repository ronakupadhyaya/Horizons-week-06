/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const initialState = [];

const wordLettersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NEW_WORD:
            const tempArray = action.word.split('');
            const newState = tempArray.map(letter => ({letter: letter, guessed: false}));
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
