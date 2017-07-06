// Action Creators

export function onBadGuess(inputLetter) {
    return {type: 'BAD_GUESS', letter: inputLetter};
}

export function onGoodGuess(inputLetter) {
    return {type: 'GOOD_GUESS', letter: inputLetter};
}

export function onNewWord(word) {
    return {type: 'NEW_WORD', array: word};
}
// import * as types from './types';
