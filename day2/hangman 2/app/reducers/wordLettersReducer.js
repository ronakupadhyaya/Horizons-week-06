/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */
/* import * as types from '../actions/types'; */

// const initialState = [
//     {letter: 'h', guessed: false},
//     {letter: 'o', guessed: false},
//     {letter: 'r', guessed: false},
//     {letter: 'i', guessed: false},
//     {letter: 'z', guessed: false},
//     {letter: 'o', guessed: false},
//     {letter: 'n', guessed: false},
//     {letter: 's', guessed: false}
// ];
const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_GAME':
            const word = action.word;
            const initialState = [];
            for (let i = 0; i < word.length; i++) {
                initialState.push({letter: word[i], guessed: false});
            }
            return initialState;
        case 'BAD_GUESS':
            return state;
        case 'GOOD_GUESS':
            const newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].letter === action.letter) {
                    newState[i].guessed = true;
                }
            }
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
