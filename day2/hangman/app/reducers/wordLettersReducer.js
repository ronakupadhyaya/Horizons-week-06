/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHOSEN_WORD':
            let newWord = action.word.split('');
            newWord = newWord.map(letter => {
                return {letter: letter.toUpperCase(), guessed: false};
            });
            return newWord;
        case 'GOOD_GUESS':
            const newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].letter === action.letter) {
                    newState[i] = Object.assign({}, newState[i], {guessed: true});
                }
            }
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
