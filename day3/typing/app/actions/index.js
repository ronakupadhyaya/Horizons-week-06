// import * as types from './types';

export function startGame() {
    return {
        type: 'START_GAME'
    };
}

export function timer() {
    return {
        type: 'DECREMENT_TIMER',
    };
}

export function endGame() {
    return {
        type: 'ENDGAME',
    };
}
