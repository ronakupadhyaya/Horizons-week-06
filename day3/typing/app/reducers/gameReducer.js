import words from '../dictionary.js';
import _ from 'underscore';

const shuffled = _.shuffle(words);
const wordList = shuffled.slice(0, 100);

const gameReducer = (state = wordList, action) => {
    switch(action.type) {
        case 'TEMP':
            return null;
        default:
            return state;
    }
};

export default gameReducer;
