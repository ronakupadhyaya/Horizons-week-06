/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

<<<<<<< HEAD
const wordLettersReducer = (state = [{letter:"A", guessed:false}], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            state.slice(0).map(() =>
            if(letter===input.value){
              guessed: true, letter: input.vaue
            })
        default:
            return state;
    }
};

export default wordLettersReducer;

//) => if(letterInAnswer(input.value)){return onGoodGuess(input.value)}
// return onBadGuess(input.value)}}
=======
// const wordLettersReducer =

// export default wordLettersReducer;
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
