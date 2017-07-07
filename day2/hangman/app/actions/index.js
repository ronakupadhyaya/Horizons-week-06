// Action Creators

// import * as types from './types';
export function badGuess(letter) {
    return {
        type: 'BAD_GUESS',
        letter
    };
}

export function wordLetter(letter) {
    return {
        type: 'WORD_LETTER',
        letter,
        guessed: false
    };
}

export function goodGuess(letter) {
    return {
        type: 'GOOD_GUESS',
        letter
    };
}

export function chosenWord(word) {
    return {
        type: 'CHOSEN_WORD',
        word
    };
}
