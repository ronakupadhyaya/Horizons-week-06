import * as types from './types';

// NEW_CHAR action creator for when user inputs a new character
const newChar = (char, currPos, words) => (
  {
    type: types.NEW_CHAR,
    char,
    currPos,
    words,
  }
);

// START_GAME action creator to start the game
const startGame = () => (
  {
    type: types.START_GAME,
  }
);

// END_GAME action creator to end the game
const endGame = () => (
  {
    type: types.END_GAME,
  }
);

// DECREMENT_TIMER action creator to decrement the timer
const decrementTimer = () => (
  {
    type: types.DECREMENT_TIMER,
  }
);

// NEXT_WORD action creator for when user inputs space to move to next word
const nextWord = (currPos, words) => (
  {
    type: types.NEXT_WORD,
    currPos,
    words,
  }
);

export default {
  newChar,
  startGame,
  endGame,
  decrementTimer,
  nextWord,
};
