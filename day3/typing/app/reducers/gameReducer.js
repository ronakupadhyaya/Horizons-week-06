import words from '../dictionary';
import _ from 'underscore';

const wordListReducer = (state = _.shuffle(words).slice(0, 100), action) => {
    switch (action.type) {
        case 'START_GAME':
            return state;
        case 'END_GAME':
            return state;
        default:
            return state;
    }
};

export default wordListReducer;
