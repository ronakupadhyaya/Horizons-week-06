import words from '../dictionary';
import _ from 'underscore';


const gameReducer = (state = {timer: 0, streak: 0, score: 0, wordList: _.shuffle(words).slice(0, 100), userInput: [], currentIndex: [0, -1]}, action) => {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case 'START_GAME':
            newState.timer = 60;
            return newState;
        case 'DECREMENT_TIMER':
            newState.timer--;
            return newState;
        case 'END_GAME':
            newState.timer = 60;
            newState.streak = 0;
            newState.score = 0;
            return newState;
        case 'CHAR_ADDED':
            newState.userInput[newState.currentIndex[0]] = action.input;
            newState.currentIndex[1]++;
            return newState;
        case 'NEXT_WORD':
            newState.currentIndex[0]++;
            newState.currentIndex[1] = -1;
            return newState;
        default:
            return state;
    }
};

export default gameReducer;
