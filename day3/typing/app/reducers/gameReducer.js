import words from '../dictionary';
import _ from 'underscore';

_.shuffle(words);
const wordList = words.slice(0, 100);

const gameReducer = (state = wordList, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default gameReducer;
