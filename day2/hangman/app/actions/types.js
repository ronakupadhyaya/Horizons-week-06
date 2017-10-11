/* Action types */
function onBadGuess(inputLetter) {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
}

function onGoodGuess(inputLetter) {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
}

function resetGame(word) {
    return {
        type: 'RESET',
        word: word
    };
}

export { onBadGuess, onGoodGuess, resetGame };
