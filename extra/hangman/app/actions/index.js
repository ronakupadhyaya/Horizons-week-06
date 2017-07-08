// Action Creators
const badGuess = (inputLetter) => ({
    type: 'BAD_GUESS',
    letter: inputLetter
});

const goodGuess = (inputLetter) => ({
    type: 'GOOD_GUESS',
    letter: inputLetter
});

const newGame = (word) => ({
    type: 'NEW_GAME',
    word: word
});
// import * as types from './types';
export { badGuess, goodGuess, newGame };
