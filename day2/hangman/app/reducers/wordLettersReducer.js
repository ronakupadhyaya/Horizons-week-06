/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const word = 'SPONGEBOB';

function wordToState(string) {
    const stringSplit = string.split('');
    const ret = [];
    stringSplit.forEach( (char) => {
        const charObj = {
            letter: char,
            guessed: false,
        };
        ret.push(charObj);
    } );
    return ret;
}

const wordLettersReducer = (state = wordToState(word), action) => {
    switch(action.type) {
        case 'SET_WORD': {
            return wordToState(action.word);
        }
        case 'GOOD_GUESS': {
            return state.map( (letter) => {
                if(letter.letter === action.letter) {
                    return Object.assign({}, letter, {guessed: true});
                }
                return Object.assign({}, letter);
            });
        }
        default: {
            return state;
        }
    }
};

export default wordLettersReducer;
