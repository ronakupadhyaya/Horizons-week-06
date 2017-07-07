/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {
        letter: 'H',
        guessed: true
    },
    {
        letter: 'O',
        guessed: false
    },
    {
        letter: 'R',
        guessed: false
    },
    {
        letter: 'I',
        guessed: false
    },
    {
        letter: 'Z',
        guessed: true
    },
    {
        letter: 'O',
        guessed: false
    },
    {
        letter: 'N',
        guessed: true
    },
    {
        letter: 'S',
        guessed: false
    }
], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = state.slice();
            for (let i = 0; i < newState.length; i++) {
                if (action.inputLetter === newState[i].letter) {
                    newState[i].guessed = true;
                }
            }

            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
