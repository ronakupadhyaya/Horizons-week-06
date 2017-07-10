import words from '../dictionary.js';
import _ from 'underscore';

const shuffledWords = _.shuffle(words);
const wordList = [];
for (let i = 0; i < 100; i++) {
    wordList.push(shuffledWords[i]);
}

const gameReducer = (state = wordList, action) => {
    switch (action.type) {
        case 'GAME':
            return state;
        default:
            return state;
    }
};

export default gameReducer;
