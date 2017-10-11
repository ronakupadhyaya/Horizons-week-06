/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            console.log('Good runs');
            const tempState = [...state];
            for(let i = 0; i < tempState.length; i++) {
                if(tempState[i].letter === action.letter) {
                    tempState[i].guessed = !tempState[i].guessed;
                }
            }
            return tempState;
      //  case 'BAD_GUESS':
        default:
            return state;
    }
};

export default wordLettersReducer;
