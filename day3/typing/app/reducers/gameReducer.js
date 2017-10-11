import words from '../hardCode';
import _ from 'underscore';

const sampled  = _.sample(words, 100);

const initialSample  = sampled.map((word) => {
    return word.split('').map((letter) => ({letter: letter, status: 'pending'}));
});

/* const initialSample = [ */
/*     [{letter: 'I', status: 'correct'}], */
/*     [ */
/*         {letter: 'a', status: 'incorrect'}, */
/*         {letter: 'm', status: 'correct'} */
/*     ], */
/*     [ */
/*         {letter: 'P', status: 'correct'}, */
/*         {letter: 'a', status: 'pending'}, */
/*         {letter: 'm', status: 'pending'} */
/*     ] */
/* ]; */

const initialState = {
    wordList: initialSample,
    currentIndex: [0, 0],
    userInput: ''
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        /* case ('NEW_GAME'): */
            /* const newSample = _.sample(words, 100); */
            /* const newState = Object.assign({}, state, {wordList: newSample}); */
            /* return newState; */
        case ('NEW_LETTER'):
            const newState = Object.assign({}, state);
            const cur = newState.currentIndex;
            const curLetter = newState.wordList[cur[0]][cur[1]];
            if (action.letter === ' ') {
                newState.userInput = '';
            } else if (action.letter === curLetter) {
                curLetter.status = 'correct';
            } else {
                curLetter.status = 'incorrect';
            }
            return newState;
        default:
            return state;
    }
}

export default gameReducer;
