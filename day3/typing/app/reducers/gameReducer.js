import words from '../dictionary';
import underscore from 'underscore';

const wordList = underscore.shuffle(words).slice(0, 100);

const gameReducer = (state = wordList, action) => {
    switch (action.type) {
        case 'START_GAME':
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
