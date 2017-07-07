// Action Creators

// import * as types from './types';

export function badGuess(inputLetter) {
    console.log('hello');
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
}

export function goodGuess(inputLetter) {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
}
