/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */
// you want to make sure the new state has the guessed field set to true
// for each of the letter objects with letter: "O".
// Your initial state can be any hardcoded word you want, just be sure all the
// guessed fields start as false.
const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            const newState = [...state];
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};
// import * as types from '../actions/types';


export default guessedLettersReducer;
