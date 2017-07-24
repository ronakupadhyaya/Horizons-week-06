import * as types from './types';

export const startGame = () => ({
    type: types.START_GAME
});

export const endGame = () => ({
    type: types.END_GAME
});

export const decrementTimer = () => ({
    type: types.DECREMENT_TIMER
});

export const characterAdded = (word) => ({
    type: types.CHAR_ADDED,
    word,
});

export const nextWord = () => ({
    type: types.NEXT_WORD,
});
