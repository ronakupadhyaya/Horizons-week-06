// Action Creators

// import * as types from './types';

function badGuess(inputLetter)  {
    return{
        type: 'BAD_GUESS',
        letter: inputLetter,
    };
}


function goodGuess(inputLetter)  {
    return{
        type: 'GOOD_GUESS',
        letter: inputLetter,
    };
}

function newGame(newWord) {
    return{
        type: 'NEW_GAME',
        word: newWord
    };
}

export {badGuess, goodGuess, newGame};
