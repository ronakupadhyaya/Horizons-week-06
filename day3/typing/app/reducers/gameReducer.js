import words from '../dictionary';
import _ from 'underscore';

const theWords = _.shuffle(words);
const wordList = theWords.slice(0, 100);

const gameReducer = (state = {wordList}, action) => {
    switch(action.type) {
        default:
            return action;
    }
};

export default gameReducer;
