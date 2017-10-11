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
]

const wordLettersReducer = (state = intitialState, action){
    switch(action.type){
    case GOOD_GUESS:
        state.map((letterState) => Object.assign({}, letterState, {guessed: initialState.letter.toUpperCase() === action.letter.toUpperCase() ? true : initialState.guessed} )
    }
}

export default wordLettersReducer;
