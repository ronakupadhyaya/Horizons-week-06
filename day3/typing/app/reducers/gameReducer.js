import words from '../dictionary';
import _ from 'underscore';

const newWords = _.shuffle(words);

const initialState = {
    wordList: newWords.slice(0, 100),
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'expression':
            return state;
        default:
            return state;
    }
};

export default gameReducer;
