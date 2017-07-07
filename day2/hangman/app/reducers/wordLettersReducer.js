/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
  {letter: 'D', guessed: false},
  {letter: 'E', guessed: false},
  {letter: 'B', guessed: false},
  {letter: 'B', guessed: false},
  {letter: 'I', guessed: false},
  {letter: 'E', guessed: false},

], action) =>{
    switch(action.type) {
        case 'GOOD_GUESS':
            const newArr = [...state];

            for (let i = 0; i < newArr.length; i++) {
                console.log('i' + newArr[i].letter);
                console.log('action' + action.letter.toUpperCase());

                if(action.letter.toUpperCase() === newArr[i].letter.toUpperCase()) {
                    newArr[i].guessed = true;
                    console.log(newArr[i]);
                }
            }
            return newArr;

        default:
            return state;
    }
};

export default wordLettersReducer;
