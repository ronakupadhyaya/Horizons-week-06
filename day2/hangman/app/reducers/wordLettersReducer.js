/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const word = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = word, action)=>{
    switch (action.type) {
        case 'GOOD_GUESS':
            const letter = action.letter;
            const array = state.slice();
            for(let i = 0; i < array.length; i++) {
                if (array[i].letter === letter) {
                    array[i].guessed = true;
                }
            }
            return array;
        case 'CHANGE_WORD':
            const newState = [];
            const theword = action.word;
            for ( let i = 0; i < theword.length; i++) {
                newState.push({letter: theword[i], guessed: false });
            }
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
