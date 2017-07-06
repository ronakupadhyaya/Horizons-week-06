/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

//

const wordLettersReducer = (state = [{letter: 'P', guessed: false}, {letter: 'A', guessed: false}, {letter: 'M', guessed: false}], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            // let guess = Object.assign({}, state.find( (wordLetter) => wordLetter.letter === action.letter), {letter: action.letter, guessed: true});
            const stateCopy = JSON.parse(JSON.stringify(state));
            // find the letterobjects whose letter matches action.letter and change guessed val to true
            stateCopy.forEach( (wordLetter) => {
                if(wordLetter.letter === action.letter) {
                    wordLetter.guessed = true;
                    //  = Object.assign({}, wordLetter, { guessed: true }); // DOES THIS CHANGE THE ORIGINAL STATES STUFF
                }
            });
            return stateCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
