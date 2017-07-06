// Action Creators

// import * as types from './types';


export function badGuess(letter) {
    return {
        type: 'BAD_GUESS',
        letter
    };
}
