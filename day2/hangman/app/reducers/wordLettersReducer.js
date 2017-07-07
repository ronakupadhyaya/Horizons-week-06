/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* 'letter': a 1 character string */
/* 'guessed': a boolean */

// import * as types from '../actions/types';

// import dict from '../data/dict';
// console.log(dict);
const array = [
    'Procaffenating',
    'Li-fi',
    'Kanye Wested',
    'Fake it for the gram',
    'Yolo',
    'Petextrian',
    'Ghost Cheeks',
    'Anti-stalking',
    'snoozefeeding',
    'Student Loan',
    'A Crapella',
    'Ratchet'
];

const index = Math.floor((Math.random() * array.length) + 1);

let word = array[index].split('');
word = word.map((letter)=>{
    return {letter: letter.toLowererCase(), guessed: false};
});

const wordLettersReducer = (state = {word}, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].letter === action.letter) {
                    newState[i].guessed = true;
                }
            }
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
