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

export function initialState(state) {
    return {
        type: 'INITIAL_STATE',
        initialState: state
    };
}
