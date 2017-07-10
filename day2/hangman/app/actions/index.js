// Action Creators

// import * as types from './types';


export function badGuess(letter) {
    return {
        letter,
        type: 'BAD_GUESS'
    };
}
export function goodGuess(letter) {
    return {
        letter,
        type: 'GOOD_GUESS'
    };
}
export function createWord(word) {
    return {
        word,
        type: 'CREATE_WORD'
    };
}
