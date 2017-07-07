/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordSubmissionReducer = (state = [], action) => {
    switch(action.type) {
        case 'WORD_SUBMISSION':
            const newState = [...state];
            for(let i = 0; i < action.word.length; i++) {
                const letterObj = {letter: action.word[i], guessed: false};
                newState.push(letterObj);
            }
            return newState;
        default:
            return state;
    }
};

export default wordSubmissionReducer;
