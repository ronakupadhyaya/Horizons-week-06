// Action Creators
// import * as types from './types';

function badGuess(i) {
    return  {
        type: 'BAD_GUESS',
        letter: i
    };
}

function goodGuess(i) {
    return  {
        type: 'GOOD_GUESS',
        letter: i
    };
}

export {badGuess, goodGuess};
