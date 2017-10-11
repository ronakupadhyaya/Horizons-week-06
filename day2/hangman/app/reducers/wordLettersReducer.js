/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const initialState = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false},
];

const wordLettersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const newState = initialState.slice();
            newState.forEach(function toggle(obj) {
                if(obj.letter === action.letter) {
                    obj.guessed = !obj.guessed;
                    return obj;
                }
                return newState;
            });
            return newState;
        case 'RESET':
            console.log(action.word);
            const array = action.word.split('');
            const diffState = [];
            array.forEach(function change(letter) {
                const newObj = Object.assign({}, {letter: letter, guessed: false});
                diffState.push(newObj);
            });
            return diffState;
        default:
            return state;
    }
};

export default wordLettersReducer;
