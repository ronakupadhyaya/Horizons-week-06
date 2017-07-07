// Action Creators
export function badGuess(letter) {
    return {
        type: 'BAD_GUESS',
        letter: letter,
    };
}

export function goodGuess(letter) {
    return {
        type: 'GOOD_GUESS',
        letter: letter,
    };
}
export function wordLetters(letter) {
    return {
        type: 'WORD_LETTER',
        letter: letter,
        guessed: false,
    };
}

// import * as types from './types';
