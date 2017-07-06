/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

//

const wordLettersReducer = (state = [{letter: 'P', guessed: false}, {letter: 'A', guessed: false}, {letter: 'M', guessed: false}], action) => {
    switch (action.type) {
        case 'WORD_SET':
            const lettersArr = action.word.split('');
            const newState = lettersArr.map( (letter) => {
                return {letter: letter, guessed: false};
            });
            console.log('newstate in wordletters reducer', newState);
            return newState;
        case 'GOOD_GUESS':
            const stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.forEach( (wordLetter) => {
                if(wordLetter.letter === action.letter) {
                    wordLetter.guessed = true;
                }
            });
            return stateCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
