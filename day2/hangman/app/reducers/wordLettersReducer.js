/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

// const wordLettersReducer =

// export default wordLettersReducer;
import * as types from '../actions/types';


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
    switch (action.type) {
        // Missing cases
        case types.GOOD_GUESS:
            const newState = state.slice();
            for (let i = 0; i < newState.length; i++) {
                // console.info('looping');
                if(newState[i].letter === action.letter) {
                    // console.info('if statement hit');
                    newState[i].guessed = true;
                    // console.info(newState[i].guessed);
                }
            }
            return newState;

        default:
            return state;
    }
};

export default wordLettersReducer;
