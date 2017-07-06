// Action Creators

import * as types from './types';

function badGuess(inputLetter) {
    return {
        type: types.BAD_GUESS,
        letter: inputLetter
    };
}

function goodGuess(inputLetter) {
    return {
        type: types.GOOD_GUESS,
        letter: inputLetter
    };
}

export {badGuess, goodGuess};
