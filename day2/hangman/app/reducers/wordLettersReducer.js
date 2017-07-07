/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';
const wordLettersReducer = ( state = [], action) => {
    switch (action.type) {
        case types.SET_WORD :
            const newWord = action.word.split('');
            const newState2 = newWord.map(letter => ({letter: letter.toUpperCase(), guessed: false}));
            return newState2;
        case types.GOOD_GUESS:
            const newState = [...state];
            newState.forEach((each, index) => {
                if(action.letter === each.letter) {
                    newState[index].guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
