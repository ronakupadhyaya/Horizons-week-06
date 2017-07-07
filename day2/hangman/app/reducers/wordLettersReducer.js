/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {letter: 'H', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'S', guessed: false}
], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [ ...state ];
            newState.map((item) => {
                if (item.letter === action.letter) {
                    item.guessed = true;
                    return item;
                }
                return item;
            });
            return newState;
        case 'SET_WORD':
            const newWord = action.word;
            const newState2 = [];
            for (let i = 0; i < newWord.length; i++) {
                newState2.push({letter: newWord.charAt(i), guessed: false});
            }
            return newState2;
        default:
            return state;
    }
};

export default wordLettersReducer;
