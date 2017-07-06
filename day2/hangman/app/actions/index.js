// Action Creators
import types from './types';
// import * as types from './types';
export function badGuess(inputLetter) {
    return {
        type: types.badGuess,
        letter: inputLetter
    };
}
export function goodGuess(inputLetter) {
    return {
        type: types.goodGuess,
        letter: inputLetter
    };
}
export function setWord(word) {
    return {
        type: types.setWord,
        word: word
    };
}
