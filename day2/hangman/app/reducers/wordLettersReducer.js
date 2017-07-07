/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
import randomWords from 'random-words';
const word = randomWords();
const initialState = [];
const wordArr = word.split('');

wordArr.forEach((letter)=> {
    const newItem = {
        letter: letter.toUpperCase(),
        guessed: false
    };
    initialState.push(newItem);
});

const wordLettersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const stateArr = state.slice();
            stateArr.forEach((element, index) => {
                if(element.letter === action.letter.toUpperCase()) {
                    stateArr[index].guessed = true;
                }
            });
            return stateArr;
        default:
            return state;
    }
};

export default wordLettersReducer;
