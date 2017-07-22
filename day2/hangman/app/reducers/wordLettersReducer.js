/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
// const word = this.props.match.params.chosenWord.map(item => {
//     return {letter: item, guessed: false};
// });

const word = [{letter: 'a', guessed: false}];

const wordLettersReducer = (state = word, action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach(letter => {
                if (letter.letter.toUpperCase() === action.letter.toUpperCase()) {
                    letter.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
