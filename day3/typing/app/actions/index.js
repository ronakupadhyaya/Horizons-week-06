import * as types from './types';

// Board actions
export function start() {
    return {
        type: types.START_GAME
    };
}

export function decrement() {
    return {
        type: types.DECREMENT_TIMER
    };
}

export function end() {
    return {
        type: types.END_GAME
    };
}
