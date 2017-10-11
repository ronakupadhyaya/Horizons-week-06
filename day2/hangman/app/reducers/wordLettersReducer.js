/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const initialState = [];
const wordLettersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_WORD':
            const anotherState = [];
            for(let i = 0; i < action.word.length; i++) {
                if(i === 0 || i === 3 || i === 4) {
                    anotherState.push({letter: action.word[i].toUpperCase(), guessed: true });
                } else {
                    anotherState.push({letter: action.word[i].toUpperCase(), guessed: false});
                }
            }
            return anotherState;
        case 'GOOD_GUESS':
            const wordCopy = [...state];
            for (let i = 0; i < wordCopy.length; i++) {
                if (wordCopy[i].letter === action.letter) {
                    wordCopy[i].guessed = true;
                }
            }
            return wordCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
