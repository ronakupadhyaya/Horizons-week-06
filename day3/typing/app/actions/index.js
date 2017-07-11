// import * as types from './types';

export function startGame(start) {
    return {
        type: 'START_GAME',
        start: start,
    };
}

export function decreaseTime(time) {
    return {
        type: 'DECREMENT_TIMER',
        time: time,
    };
}

export function endGame(status) {
    return {
        type: 'DECREMENT_TIMER',
        status: status,
    };
}
