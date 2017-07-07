/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';
import randomWord from 'random-words';
const newWord = randomWord().toUpperCase().split('');
const initialState = [
];
newWord.forEach(letter => initialState.push({letter, guessed: false}));

const wordLettersReducer = (state = initialState, action)=> {
    switch(action.type) {
        case types.GOOD_GUESS:
            const newState = [...state];
            newState.map((character) => {
                (character.letter === action.letter.toUpperCase()) ? character.guessed = true : character.guessed = character.guessed;
            }
            );
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
