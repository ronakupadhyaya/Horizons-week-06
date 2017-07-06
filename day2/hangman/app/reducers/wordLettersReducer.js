/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
// const initialState = [
//     {letter: 'H', guessed: false},
//     {letter: 'O', guessed: false},
//     {letter: 'R', guessed: false},
//     {letter: 'I', guessed: false},
//     {letter: 'Z', guessed: false},
//     {letter: 'O', guessed: false},
//     {letter: 'N', guessed: false},
//     {letter: 'S', guessed: false}
// ];

const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].letter.toLowerCase() === action.letter) {
                    const newObj = Object.assign({}, newState[i], {guessed: true});
                    newState[i] = newObj;
                }
            }
            return newState;
        case 'INITIAL_STATE':
            return action.initialState;
        default:
            return state;
    }
};

export default wordLettersReducer;
