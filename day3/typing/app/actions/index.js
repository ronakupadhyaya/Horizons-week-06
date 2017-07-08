// import * as types from './types';

export function decrementTime() {
    return {
        type: 'DECREMENT_TIMER'
    };
}

export function startGame() {
    return {
        type: 'START_GAME',
        setInt: decrementTime(),
    };
}

export function endGame() {
    return {
        type: 'END_GAME'
    };
}

export function changeFirstIndex() {
    return {
        type: 'INCREASE_FIRST'
    };
}

export function changeSecondIndex() {
    return {
        type: 'INCREASE_SECOND'
    };
}

export function keepInput(input) {
    return {
        type: 'KEEP_INPUT',
        input: input
    };
}

export function newInput() {
    return {
        type: 'NEW_INPUT'
    };
}
