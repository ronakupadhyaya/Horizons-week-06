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
    switch (action.type) {
       // Missing cases
        case 'GOOD_GUESS':
            const newState = [];
            state.forEach((obj) => {
                let newObj = {};
                if ( action.letter === obj.letter ) {
                    newObj = Object.assign({}, obj, {guessed: true});
                    newState.push(newObj);
                } else {
                    newState.push(obj);
                }
            });
            return newState;
        case 'NEW_GAME':
            const newGameState = [];
            Array.from(action.newWord).map((letter) => newGameState.push({letter: letter.toUpperCase(), guessed: false}));
            return newGameState;
        default:
            return state;
    }
};

export default wordLettersReducer;
