import _ from 'underscore';

import words from '../dictionary';
import * as types from '../actions/types';

const initialState = {
    wordList: _.shuffle(words).slice(0, 49),
    inputList: [],
    currentInput: '',
    isGameStarted: false,
    timerValue: 60,
    currentIndex: [0, 0],
};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.START_GAME:
            return Object.assign({}, state, {
                isGameStarted: true,
                timerValue: 60,
                wordList: _.shuffle(words).slice(0, 49),
                inputList: [],
            });
        case types.END_GAME:
            return Object.assign({}, state, { isGameStarted: false });
        case types.DECREMENT_TIMER:
            return Object.assign({}, state, { timerValue: state.timerValue - 1 });
        case types.CHAR_ADDED:
            const inputList = state.inputList.slice();
            inputList[state.currentIndex[0]] = action.word;
            return Object.assign({}, state, { inputList: inputList, currentInput: action.word });
        case types.NEXT_WORD:
            const currentIndex = [...state.currentIndex];
            currentIndex[0] += 1;
            return Object.assign({}, state, { currentInput: '', currentIndex  });
        default:
            return state;
    }
};

export default gameReducer;
