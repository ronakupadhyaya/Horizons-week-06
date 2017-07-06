/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
// const initialState = [
//     {letter: 'H', guessed: true},
//     {letter: 'O', guessed: false},
//     {letter: 'R', guessed: false},
//     {letter: 'I', guessed: false},
//     {letter: 'Z', guessed: true},
//     {letter: 'O', guessed: false},
//     {letter: 'N', guessed: true},
//     {letter: 'S', guessed: false}
// ];
const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            const letters = action.inputLetter.split('');
            const newerState = [];
            letters.forEach((item)=> newerState.push({letter: item.toUpperCase(), guessed: false}));
            return newerState;
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach((item)=>{
                if (item.letter === action.inputLetter) {
                    item.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
