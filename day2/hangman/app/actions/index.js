// Action Creators
import { BAD_GUESS, GOOD_GUESS, NEW_GAME } from './types';
// import * as types from './types';

const onBadGuess = (inputLetter) => ({
    type: BAD_GUESS,
    inputLetter
});

const onGoodGuess = (inputLetter) => ({
    type: GOOD_GUESS,
    inputLetter
});

const onNewGame = () => ({
    type: NEW_GAME
});

export { onBadGuess, onGoodGuess, onNewGame };
