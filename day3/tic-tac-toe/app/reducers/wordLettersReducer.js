/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
// import { chosenWord } from '../components/NewGame'

const initialState =  [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHOOSE_WORD':
            let newState1 = action.word.split('');
            newState1 = newState1.map(letter => {
                return {letter, guessed: false};
            });
            return newState1;
        case 'GOOD_GUESS':
            let newState = [...state];
            newState = newState.map((item) => {
                if (item.letter === action.letter.toUpperCase()) {
                    item.guessed = true;
                }
                return item;
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
