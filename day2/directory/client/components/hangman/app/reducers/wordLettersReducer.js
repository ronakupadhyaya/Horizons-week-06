/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE':
            return action.word.split('').map(each => ({letter: each, guessed: false}));
        case 'GOOD_GUESS':
            const newState = state.slice();
            return newState.map(each => ({letter: each.letter, guessed: (each.letter === action.letter ? true : each.guessed)
            }));

        default:
            return state;
    }
};

export default wordLettersReducer;
