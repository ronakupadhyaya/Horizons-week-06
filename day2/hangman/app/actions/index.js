// Action Creators

export function serveBadGuess(inputLetter) {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
}
export function serveGoodGuess(inputLetter) {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
}
export function serveNewGame(inputLanguage) {
    return {
        type: 'NEW_GAME',
        language: inputLanguage
    };
}
