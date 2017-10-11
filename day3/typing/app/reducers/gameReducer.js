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
    timeLeft: 60,
    started: false
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        /* case ('NEW_GAME'): */
            /* const newSample = _.sample(words, 100); */
            /* const newState = Object.assign({}, state, {wordList: newSample}); */
            /* return newState; */
        case ('NEW_LETTER'):
            const newState = {...state};
            const cur = newState.currentIndex;
            const curLetter = newState.wordList[cur[0]][cur[1]];
            if (cur[0] === 0 && cur[1] === 0) {
                newState.started = true;
            }
            if (action.letter === ' ') {
                newState.currentIndex = [newState.currentIndex[0] + 1, 0];
            } else if (action.letter === curLetter.letter) {
                newState.currentIndex = [newState.currentIndex[0], newState.currentIndex[1] + 1];
                curLetter.status = 'correct';
            } else {
                newState.currentIndex = [newState.currentIndex[0], newState.currentIndex[1] + 1];
                curLetter.status = 'incorrect';
            }
            return newState;
        case ('TICK'):
            const newState1 = {...state};
            newState1.timeLeft = newState1.timeLeft - 1;
            return newState1;
        default:
            return state;
    }
}

export default gameReducer;
