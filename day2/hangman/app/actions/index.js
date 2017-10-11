// Action Creators

// import * as types from './types';

export function badGuessesAction(badGuesses) {
    return {type: 'BAD_GUESS', badGuesses};
}
export function goodGuessesAction(goodGuesses) {
    return {type: 'GOOD_GUESS', goodGuesses};
}
