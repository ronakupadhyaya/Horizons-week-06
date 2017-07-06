/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {
        letter: 'b',
        guessed: false
    }, {
        letter: 'e',
        guessed: false
    }, {
        letter: 'n',
        guessed: false
    }
], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = state.map((item) => {
                //  console.log(action);
                if (item.letter === action.letter) {
                    return {letter: item.letter, guessed: true};
                }
                return item;
            });
            return newState;
        case 'NEW_WORD':
            const newState1 = action.array.map((item) => {
                return {letter: item, guessed: false};
            });
            return newState1;
        default:
            return state;
    }
};

export default wordLettersReducer;
