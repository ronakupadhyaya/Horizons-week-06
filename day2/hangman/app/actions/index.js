// Action Creators

import * as types from './types';

export function badGuess(letter) {
  return {
    type: types.BAD_GUESS,
    letter,
  };
}

export function goodGuess(letter) {
  return {
    type: types.GOOD_GUESS,
    letter,
  };
}

export function newWord(word) {
  return {
    type: types.NEW_WORD,
    word,
  };
}
