/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const initialState = [];

const wordLettersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WORD_CHOSEN':
            const wordArray = action.word.split('');
            const setState = wordArray.map((letter) => {
                return {
                    letter: letter,
                    guessed: false
                };
            });
            return setState;
        case 'GOOD_GUESS':
            const newState = state.map((wordLetterObj) => {
                if (wordLetterObj.letter === action.letter) {
                    return Object.assign({}, wordLetterObj, {guessed: true});
                }
                return wordLetterObj;
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
