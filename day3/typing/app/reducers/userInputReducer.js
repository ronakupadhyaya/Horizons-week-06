import { shuffle } from 'underscore';

let words = require('../dictionary.js');

const initialState = {onLeaderboard: false, pid: 0, timer: 3000, endScore: 0, wordList: [], inputBox: '', userInput: [''], currentIndex: [0, 0], totalScore: 0, streakCount: 0};

const userInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_BOX':
            return Object.assign({}, state, {inputBox: action.inputBox});
        case 'DECREMENT_TIMER':
            return Object.assign({}, state, {timer: state.timer - 1000});
        case 'CHAR_ADDED':
            const userInputCopy = state.userInput.slice();
            userInputCopy[state.currentIndex[0]] = action.char;
            const currentIndexCopy = [state.currentIndex[0], state.currentIndex[1] + 1];
            return Object.assign({}, state, {userInput: userInputCopy, currentIndex: currentIndexCopy});
        case 'NEXT_WORD':
            let newStreak = state.streakCount;
            if (state.inputBox.slice(0, state.inputBox.length - 1) === state.wordList[state.currentIndex[0]]) {
                newStreak += 1;
            } else {
                newStreak = 0;
            }
            return Object.assign({}, state, {inputBox: '', streakCount: newStreak, currentIndex: [state.currentIndex[0] + 1, 0]});
        case 'GET_WORDS':
            console.log('getting the words');
            words = shuffle(words).slice(0, 100);
            return Object.assign({}, state, {wordList: words});
        case 'START_GAME':
            return Object.assign({}, state, {pid: action.pid});
        case 'PLAY_AGAIN':
            console.log('play again!');
            return initialState;
        case 'END_GAME':
            console.log('end game score: ' + action.endScore);
            const topTenArr = JSON.parse(localStorage.getItem('topTen'));
            let onLeaderboard = false;
            if (topTenArr.length < 10 || action.endScore > topTenArr[topTenArr.length - 1].score) {
                onLeaderboard = true;
            }
            return Object.assign({}, state, {endScore: action.endScore, onLeaderboard: onLeaderboard});
        default:
            return state;
    }
};

export default userInputReducer;
