/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) =>{
    switch (action.type) {
        case 'START_GAME':
            const wrdSplit = action.word.split('');
            const emptyArr = [];
            wrdSplit.forEach((letter) => emptyArr.push({letter: letter, guessed: false}));
            return emptyArr;
        case 'GOOD_GUESS':
            return state.map((guess) => {
                if(guess.letter === action.letter) {
                    return {letter: action.letter, guessed: true};
                }
                return guess;
            }
        );
        default:
            return state;
    }
};


export default wordLettersReducer;
