// Action Creators

// import * as types from './types';

function goodGuess(inputLetter) {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter.toUpperCase()
    };
}

function badGuess(inputLetter) {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter.toUpperCase()
    };
}

function setWord(input) {
    return {
        type: 'CREATE',
        word: input.toUpperCase()
    };
}


export {badGuess, goodGuess, setWord};
