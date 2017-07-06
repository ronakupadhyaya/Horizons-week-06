/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const word = [
    {letter: 'P', guessed: false},
    {letter: 'A', guessed: false},
    {letter: 'W', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'S', guessed: false},
    {letter: 'H', guessed: false},
    {letter: 'M', guessed: false},
    {letter: 'E', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'T', guessed: false}
];


const wordLettersReducer = (state = word, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [ ...state ];
            let index;
            let update;
            for (let i = 0; i < newState.length; i++) {
                if(newState[i].letter === action.letter) {
                    index = i;
                    update = {
                        letter: newState[index].letter,
                        guessed: true
                    };
                    newState.splice(index, 1, update);
                }
            }
            return newState;
        default:
            return state;
    }
};

export { wordLettersReducer };
