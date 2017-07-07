/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const intialState = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = function(state = intialState, action) {
    const newState = state.slice();
    switch(action.type) {
        case 'GOOD_GUESS':
            newState.forEach((obj) => {
                if (obj.letter.toLowerCase() === action.letter.toLowerCase()) {
                    obj.guessed = true;
                }
            });
            return newState;
        case 'NEW_GAME':
            const newWordArray = action.word.split('');
            return newWordArray.map(letter => ({letter: letter, guessed: false}));
        default:
            return state;
    }
};

export default wordLettersReducer;
