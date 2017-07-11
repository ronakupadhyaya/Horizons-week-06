import words from '../dictionary';
import _ from 'underscore';

const tempArr = words.slice(0, 100);

const initialState = {
    wordsList: _.shuffle(tempArr),
    timer: 0,
    value: '',
    userInput: [],
    currentIndex: [0, 0],
    totalScore: 0,
    streakCount: 0,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return Object.assign({}, state, {timer: 59});
        case 'DECREATEMENT_TIMER':
            return Object.assign({}, state, {timer: state.timer - 1});
        case 'CHAR_ADDED':
            const userInput = JSON.parse(JSON.stringify(state.userInput));
            const wordNumber = state.currentIndex[0];
            userInput[wordNumber] = action.payload;
            const currentIndex = [state.currentIndex[0], state.currentIndex[1] + 1];
            return Object.assign({}, state, {userInput, currentIndex, value: action.payload});
        case 'NEXT_WORD':
            const currentIndex2 = [state.currentIndex[0] + 1, 0];
            console.log(currentIndex2);
            const userInput2 = [...state.userInput, ''];
            return Object.assign({}, state, {userInput: userInput2, value: '', currentIndex: currentIndex2});
        case 'ADD_SCORE':
            return Object.assign({}, state, {totalScore: state.totalScore + 1});
        case 'END_GAME':
            return state;
        case 'RESTART_GAME':
            return Object.assign({}, state, {
                timer: 0,
                value: '',
                userInput: [],
                currentIndex: [0, 0],
                totalScore: 0,
                streakCount: 0});
        default:
            return state;
    }
};


export default gameReducer;
