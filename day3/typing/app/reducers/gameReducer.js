import words from '../hardCode';
import _ from 'underscore';

const sampled  = _.sample(words, 100);

// const initialSample  = sampled.map((word) => {
//     return word.split('').map((letter) => ({letter: letter, status: 'pending'}));
// });

const initialSample = [
    [{letter: 'I', status: 'correct'}],
    [
        {letter: 'a', status: 'incorrect'},
        {letter: 'm', status: 'correct'}
    ],
    [
        {letter: 'P', status: 'correct'},
        {letter: 'a', status: 'pending'},
        {letter: 'm', status: 'pending'}
    ]
];


console.log(initialSample);

/* const initialState = {wordList: initialSample}; */

function gameReducer(state = initialSample, action) {
    switch (action.type) {
        /* case ('NEW_GAME'): */
            /* const newSample = _.sample(words, 100); */
            /* const newState = Object.assign({}, state, {wordList: newSample}); */
            /* return newState; */
        default:
            return state;
    }
}

export default gameReducer;
