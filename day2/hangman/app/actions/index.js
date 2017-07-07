// Action Creators
import * as types from './types';

export const badGuesses = (inputLetter) => {
    return ({type: types.BAD_GUESS, letter: inputLetter});
};
