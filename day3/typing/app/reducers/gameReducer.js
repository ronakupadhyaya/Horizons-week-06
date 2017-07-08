import words from '../dictionary.js';
import _ from 'underscore';

const shuffleWords = _.shuffle(words);
const wordList = shuffleWords.slice(0, 100);

const gameReducer = (state = wordList, action) => {
    switch(action.type) {
        default:
            return state;
    }
};


export default gameReducer;
