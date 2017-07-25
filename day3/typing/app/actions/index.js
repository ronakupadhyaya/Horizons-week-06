import {START_GAME, DECREMENT_TIMER, END_GAME, CHAR_ADDED, NEXT_WORD} from './types';

export function startGame() {
    return {
        type: START_GAME
    };
}

export function decrementTimer() {
    return {
        type: DECREMENT_TIMER
    };
}

export function endGame() {
    return {
        type: END_GAME
    };
}

export function charAdded(letter) {
    return {
        type: CHAR_ADDED,
        letter
    };
}

export function nextWord() {
    return {
        type: NEXT_WORD
    };
}
