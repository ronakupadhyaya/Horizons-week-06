import words from '../dictionary';
import _ from 'underscore';

const newWords = _.shuffle(words).slice(0, 100);

const gameReducer = (state = {timer: 0, streak: 0, score: 0, wordList: newWords, userInput: [], currentIndex: [0, 0]}, action) => {
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
            newState.currentIndex[1]++;
            return newState;
        case 'NEXT_WORD':
            newState.currentIndex[0]++;
            return newState;
        default:
            return state;
    }
};

export default gameReducer;
