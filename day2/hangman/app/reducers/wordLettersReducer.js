/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const defaultState = [{letter: 'W', guessed: false},
                      {letter: 'H', guessed: false},
                      {letter: 'O', guessed: false},
                      {letter: 'R', guessed: false},
                      {letter: 'E', guessed: false},
                      {letter: 'S', guessed: false},
                      {letter: 'T', guessed: false},
                      {letter: 'A', guessed: false},
                      {letter: 'R', guessed: false},
                      {letter: 'T', guessed: false},
                      {letter: 'E', guessed: false},
                      {letter: 'R', guessed: false},
                      {letter: 'S', guessed: false}
                    ];

const wordLettersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.GOOD_GUESS:
            const newState = state.map((elt) => {
                if(action.letter === elt.letter) {
                    return {letter: action.letter, guessed: true};
                }
                return elt;
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
