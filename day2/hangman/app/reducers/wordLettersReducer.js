/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

// const wordLettersReducer =

// export default wordLettersReducer;


const initialState = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = initialState, {type, letter, newWord}) => {
    switch(type) {
        case 'GOOD_GUESS':
            let newState = [...state];
            newState = newState.map(el => {
                if (el.letter === letter.toUpperCase()) {
                    el.guessed = true;
                }
                return el;
            });
            return newState;
            case 'CHOOSE_WORD':
            
        default:
            return state;
    }
};

export default wordLettersReducer;
