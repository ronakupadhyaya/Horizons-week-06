/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [{letter: 'O', guessed: true}, {letter: 'X', guessed: false}], action) => {
    switch(action.type) {
        case 'CREATE_WORD':
            const wordArray = action.word.split('');
            const objArray = [];

            wordArray.forEach( letter => {
                objArray.push({
                    letter: letter,
                    guessed: false
                });
            });
            return objArray;
        case 'GOOD_GUESS':
            const copyState = [...state];
            copyState.forEach((letterObj) => {
                if(letterObj.letter === action.letter) {
                    letterObj.guessed = true;
                }
            });
            return copyState;
        default:
            return state;
    }
};

export default wordLettersReducer;
