// Action Creators

// import * as types from './types';
export function serveBadGuess(inputLetter) {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
}
export function serveGoodGuess(inputLetter) {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
}
export function serveNewGame(inputWord) {
    return {
        type: 'NEW_GAME',
        word: inputWord
    };
}
