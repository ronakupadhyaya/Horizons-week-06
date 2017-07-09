// One reducer for running the game
import * as _ from 'underscore';
// Import possible words
import * as words from '../dictionary';

// Returns new set of 100 words each time
// Specially formatted for display--
//   format: array, each element is a character including spaces
const genWords = () => {
    // Shuffle the words and select the first 100
    const hundred = _.shuffle(words).slice(0, 100);
    // Array for each character
    let textChars = [];
    // Take each words from the 100
    hundred.forEach((word) => {
        // Split each word into its characters
        const arr = word.split('');
        // Add a space character before each word
        arr.unshift(' ');
        // Add the characters to the array, non mutating
        textChars = textChars.concat(arr);
    });
    // Remove the first space
    textChars.shift();
    // Return formatted array
    return textChars;
};

// Return the initial game state with a fresh set of words
const createInitState = () => {
    return {
        wordLetters: genWords(),
        started: false,
        timeLeft: 0,
        badGuesses: 0,
        score: 0,
        inputDisplay: '',
        onIndex: 0,
        gameOver: false
    };
};

// Reducer, initial state default is fresh state
function gameReducer(state = createInitState(), action) {
    // Check the action type
    switch (action.type) {
        // Correct character typed increments the score, changes user display
        //  and advnaces to next index
        case 'GOOD_GUESS':
            return Object.assign({}, state, {
                score: state.score + 1,
                inputDisplay: state.inputDisplay + action.letter,
                onIndex: state.onIndex + 1
            });
        // Bad guess decrements the score
        case 'BAD_GUESS':
            return Object.assign({}, state, {
                badGuesses: state.badGuesses + 1,
                score: state.score - 1
            });
        // Start action makes playable state with 60 second timer
        case 'START_GAME':
            return Object.assign({}, state, {started: true, timeLeft: 60});
        // Action whenever the user has finished a word
        case 'EMPTY_DISPLAY':
            return Object.assign({}, state, {inputDisplay: ''});
        // End game action closes the game state
        case 'END_GAME':
            return Object.assign({}, state, {started: false, gameOver: true});
        // Timer call takes a second off the timer
        case 'DECREMENT_TIMER':
            return Object.assign({}, state, {timeLeft: state.timeLeft - 1});
        // Restart game creates new fresh state for new game
        case 'RESTART_GAME':
            return createInitState();
        default:
            return state;
    }
}
// -------!!!!!!
// Note the use of non-mutating functionality is very important here
//

export default gameReducer;
