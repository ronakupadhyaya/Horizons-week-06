/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

// const wordLettersReducer =

// export default wordLettersReducer;
/* {letter: 'H', guessed: false},
{letter: 'O', guessed: false},
{letter: 'R', guessed: false},
{letter: 'I', guessed: false},
{letter: 'Z', guessed: false},
{letter: 'O', guessed: false},
{letter: 'N', guessed: false},
{letter: 'S', guessed: false} */

const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_GAME':
            const tempState = action.word;
            const arr = tempState.split('');
            const final = arr.map((letter) => ({letter: letter, guessed: false}));
            return final;
        case 'GOOD_GUESS':
            const temp = [...state];
            temp.forEach((item) => {
                if(item.letter === action.letter) {
                    item.guessed = true;
                }
            });
            return temp;
        default:
            return state;
    }
};

export default wordLettersReducer;
