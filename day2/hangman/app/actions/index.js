// Action Creators

// import * as types from './types';
export function onBadGuessAction(letter) {
    return {
        type: 'BAD_GUESS',
        letter
    };
}

export function onGoodGuessAction(letter) {
    return {
        type: 'GOOD_GUESS',
        letter
    };
}

export function changeWordAction(word) {
    return {
        type: 'CHANGE_WORD',
        word
    };
}
