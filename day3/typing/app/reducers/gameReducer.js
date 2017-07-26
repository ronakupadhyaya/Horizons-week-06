import dictionary from '../dictionary';
import _ from 'underscore';

const wordList = _.shuffle(dictionary).slice(0, 100);
const initialState = {
    wordList: wordList,
    started: false,
    timer: 60,
    userInput: [],
    currentIndex: [0, 0],
    totalScore: 0,
    streakCount: 0,
};
const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'START_GAME':
            const state1 = Object.assign({}, state, {started: ! state.started});
            return state1;
        case 'DECREMEMNT_TIME':
            const state2 = Object.assign({}, state, {timer: state.timer - 1});
            return state2;
        case 'END_GAME':
            const state3 = Object.assign({}, state, {timer: 60, started: false, userInput: [], totalScore: 0, currentIndex: [0, 0], streakCount: 0});
            return state3;
        case 'CHAR_ADDED':
            const newState = Object.assign({}, state);
            if (newState.currentIndex[1] === 0) {
                newState.userInput.push(action.letter);
            } else {
                newState.userInput[newState.currentIndex[0]] = action.letter;
            }
            newState.currentIndex[1] = newState.currentIndex[1] + 1;
            return newState;
        case 'NEXT_WORD':
            const newState1 = Object.assign({}, state);
            newState1.currentIndex[0] = newState1.currentIndex[0] + 1;
            newState1.currentIndex[1] = 0;
            return newState1;
        default:
            return state;
    }
};

export default gameReducer;
