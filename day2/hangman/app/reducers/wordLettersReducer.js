/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'NEW_WORD':
            newState = action.word.split('').map(wordLetter => {
                return Object.assign({}, {letter: wordLetter.toUpperCase(), guessed: false});
            });
            console.log(newState);
            return newState;
        case 'GOOD_GUESS':
            newState = state.map(wordLetter => {
                return action.letter.toUpperCase() === wordLetter.letter ? Object.assign({}, wordLetter, {guessed: true}) : wordLetter;
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
