// import * as types from './types';

function startGame() {
    return {
        type: 'START_GAME'
    };
}

function decrementTimer() {
    return {
        type: 'DECREMENT_TIMER'
    };
}

function endGame() {
    return {
        type: 'END_GAME'
    };
}

function addChar(char) {
    return {
        type: 'CHAR_ADDED',
        char
    };
}

function nextWord() {
    return {
        type: 'NEXT_WORD'
    };
}

export {startGame, decrementTimer, endGame, addChar, nextWord};
