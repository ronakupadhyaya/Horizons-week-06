function startGame() {
    return {
        type: 'START_GAME'
    };
}

function decrementTimer() {
    return {
        type: 'DECREMENT_TIMER'
    };
}

function endGame() {
    return {
        type: 'END_GAME'
    };
}

function addChar(char) {
    return {
        type: 'CHAR_ADDED',
        char
    };
}

function nextWord() {
    return {
        type: 'NEXT_WORD'
    };
}

function badGuess() {
    return {
        type: 'BAD_GUESS'
    };
}

function correctGuess() {
    return {
        type: 'CORRECT_GUESS'
    };
}

function addToStreakCount() {
    return {
        type: 'ADD_TO_STREAK_COUNT'
    };
}

function cancelStreak(streakPoints) {
    return {
        type: 'CANCEL_STREAK',
        streakPoints
    };
}

export {startGame, decrementTimer, endGame, addChar, nextWord, badGuess, correctGuess, addToStreakCount, cancelStreak};
