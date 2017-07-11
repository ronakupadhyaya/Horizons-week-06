import dictionary from '../dictionary.js';
import _ from 'underscore';
const initialList = _.shuffle(dictionary).slice(0, 100);
const initialState = {
    wordList: initialList,
    inputLetters: [],
    currentIndex: 0,
    currentWordIndex: 0,
    streakWord: true
};
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'END_STREAK':
            return Object.assign({}, state, {streakWord: false});
        case 'NEXT_WORD':
            const inputArr = [...state.inputLetters];
            inputArr.push(action.input);
            return Object.assign({}, state, {inputLetters: inputArr, currentIndex: state.currentIndex + 1, currentWordIndex: 0, streakWord: true});
        case 'NEXT_LETTER':
            const inputArr2 = [...state.inputLetters];
            inputArr2.push(action.input);
            return Object.assign({}, state, {inputLetters: inputArr2, currentWordIndex: state.currentWordIndex + 1});
        case 'END_GAME':
            return Object.assign({}, initialState, {wordList: _.shuffle(dictionary).slice(0, 100)});
        case 'RESTART_GAME':
        default:
            return state;
    }
};

export default gameReducer;
