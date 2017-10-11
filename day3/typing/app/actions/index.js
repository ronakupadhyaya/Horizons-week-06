import * as types from './types';

// NEW_CHAR action creator for when user inputs a new character
const newChar = (char) => (
  {
    type: types.NEW_CHAR,
    char,
  }
);

// START_GAME action creator to start the game
const startGame = () => (
  {
    type: types.START_GAME,
  }
);

// DECREMENT_TIMER action creator to decrement the timer
const decrementTimer = () => (
  {
    type: types.DECREMENT_TIMER,
  }
);

// NEXT_WORD action creator for when user inputs space to move to next word
const nextWord = () => (
  {
    type: types.NEXT_WORD,
  }
);

export default {
  newChar,
  startGame,
  decrementTimer,
  nextWord,
};
