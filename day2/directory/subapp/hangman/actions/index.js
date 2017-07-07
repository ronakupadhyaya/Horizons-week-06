// Action Creators

import * as types from './types';

const BAD_GUESS = (inputLetter, guessedLetters) => {
    return {
        type: types.BAD_GUESS,
        letter: inputLetter,
        guessedLetters: guessedLetters
    };
};

const GOOD_GUESS = inputLetter => {
    return {
        type: types.GOOD_GUESS,
        letter: inputLetter
    };
};

const NEW_WORD = word => {
    return {
        type: types.NEW_WORD,
        word: word
    };
};

const SUBMIT_NEW_WORD = word => {
    return {
        type: types.SUBMIT_NEW_WORD,
        word: word
    };
};

export { BAD_GUESS, GOOD_GUESS, NEW_WORD, SUBMIT_NEW_WORD };
