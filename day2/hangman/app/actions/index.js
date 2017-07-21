// Action Creators

import {BAD_GUESS, GOOD_GUESS, NEW_WORD} from './types';

export function badGuess(inputLetter) {
    return {
        type: BAD_GUESS,
        inputLetter
    };
}

export function goodGuess(inputLetter) {
    return {
        type: GOOD_GUESS,
        inputLetter
    };
}

export function newWord(inputWord) {
    return {
        type: NEW_WORD,
        inputWord
    };
}
