import * as types from './types';

export function startGame() {
    return {
        type: types.START_GAME
    };
}

export function decrementTimer() {
    return {
        type: types.DECREMENT_TIMER
    };
}

export function endGame() {
    return {
        type: types.END_GAME
    };
}

export function userAdded(input) {
    return {
        type: types.USER_ADDED,
        input
    };
}
