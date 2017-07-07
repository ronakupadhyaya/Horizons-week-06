// Action Creators
// import * as types from './types';


export function onBadGuess(inputLetter) {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
}

export function onGoodGuess(inputLetter) {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
}

export function onStarting(input) {
    return {
        type: 'STARTING_WORD',
        word: input
    };
}
