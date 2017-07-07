// Action Creators

// import * as types from './types';


export function badGuess(letter) {
    return {
        type: 'BAD_GUESS',
        letter
    };
}

export function goodGuess(letter) {
    return {
        type: 'GOOD_GUESS',
        letter
    };
}
