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
            const newState = Object.assign({}, state, {timer: 59});
            return newState;
        case 'DECREATEMENT_TIMER':
            const newState2 = Object.assign({}, state, {timer: state.timer - 1});
            return newState2;
        case 'CHAR_ADDED':
            const userInput = JSON.parse(JSON.stringify(state.userInput));
            const wordNumber = state.currentIndex[0];
            userInput[wordNumber] = action.payload;
            const newState3 = Object.assign({}, state, {userInput, value: action.payload});
            return newState3;
        case 'NEXT_WORD':
            const currentIndex = [state.currentIndex[0] + 1, 0];
            const userInput2 = [...state.userInput, ''];
            const newState4 = Object.assign({}, state, {userInput: userInput2, value: '', currentIndex});
            return newState4;
        default:
            return state;
    }
};


export default gameReducer;
