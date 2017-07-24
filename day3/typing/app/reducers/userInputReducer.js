import { shuffle } from 'underscore';

let words = require('../dictionary.js');

const initialState = {wordList: [], inputBox: '', userInput: [''], currentIndex: [0, 0], totalScore: 0, streakCount: 0};

const userInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_BOX':
            return Object.assign({}, state, {inputBox: action.inputBox});
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
        default:
            return state;
    }
};

export default userInputReducer;
