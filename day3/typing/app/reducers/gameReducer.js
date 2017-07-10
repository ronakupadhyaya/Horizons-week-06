import words from '../dictionary.js';
import _ from 'underscore';

const shuffledWords = _.shuffle(words);
const wordList = shuffledWords.slice(0, 100);


// ADD to initial state

const gameReducer = (state = wordList, action) => {
    switch(action.type) {
        case 'START_GAME':
            setInterval(this.interval, 1000);
            return state;
        case 'DECREMENT_TIMER':
            return state;
        case 'END_GAME':
            return state;
        default:
            return state;
    }
};

export default gameReducer;
