import dictionary from '../dictionary';
import _ from 'underscore';

const shuffled = _.shuffle(dictionary);

const gameReducer = (state = shuffled.slice(0, 100), action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            return state + 1;
        default:
            return state;
    }
};

export default gameReducer;
