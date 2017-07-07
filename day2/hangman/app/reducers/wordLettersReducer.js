/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const currstate = state.slice();
            for (let i = 0; i < currstate.length; i++) {
                if (currstate[i].letter === action.letter) {
                    currstate[i].guessed = true;
                }
            }
            return currstate;
        case 'STARTING_WORD':
            const currstate2 = state.slice();
            const wordArr = action.word.split('');
            for (let i = 0; i < wordArr.length; i++) {
                currstate2.push({letter: wordArr[i].toUpperCase(), guessed: false});
            }
            return currstate2;
        default:
            return state;
    }
};

export default wordLettersReducer;
