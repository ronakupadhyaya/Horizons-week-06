// Action Creators

import * as types from './types';

export function serveBadGuess(inputLetter) {
    return {
        type: types.BAD_GUESS,
        letter: inputLetter
    };
}

export function serveGoodGuess(inputLetter) {
    return {
        type: types.GOOD_GUESS,
        letter: inputLetter
    };
}

export function serveNewWord(inputWord) {
    return {
        type: types.NEW_WORD,
        word: inputWord
    };
}
