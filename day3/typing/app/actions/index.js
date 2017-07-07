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

export {startGame, decrementTimer, endGame};
